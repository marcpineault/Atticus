import "server-only";
import { S3Client } from "@aws-sdk/client-s3";

/**
 * Returns a validated env var or throws at call time (not at module import time).
 * Deferring validation to call time means importing this module never throws —
 * which prevents startup failures in environments (tests, non-upload workers)
 * that don't use R2.
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

/** Lazily-initialised singleton — created on first use, not at module load time. */
let _client: S3Client | undefined;

export function getR2Client(): S3Client {
  if (!_client) {
    _client = new S3Client({
      region: "auto",
      endpoint: `https://${requireEnv("CLOUDFLARE_R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: requireEnv("CLOUDFLARE_R2_ACCESS_KEY"),
        secretAccessKey: requireEnv("CLOUDFLARE_R2_SECRET_KEY"),
      },
    });
  }
  return _client;
}

export function getR2Bucket(): string {
  return requireEnv("CLOUDFLARE_R2_BUCKET");
}

/**
 * `r2Client` — lazy Proxy so S3Client instantiation (and env-var reads) are
 * deferred to the first actual R2 operation, not to module import time.
 * All callers can use this exactly as they would a plain S3Client instance.
 *
 * `R2_BUCKET` is not re-exported as a string constant because a module-level
 * constant would read the env var at import time. Use getR2Bucket() instead.
 */
export const r2Client: S3Client = new Proxy({} as S3Client, {
  get(_target, prop, receiver) {
    return Reflect.get(getR2Client(), prop, receiver);
  },
});
