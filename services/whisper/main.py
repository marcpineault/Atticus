# services/whisper/main.py
import io
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, File, UploadFile, HTTPException
from faster_whisper import WhisperModel

logger = logging.getLogger("whisper-service")
model: WhisperModel | None = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global model
    logger.info("Loading faster-whisper model (medium.en, int8)...")
    model = WhisperModel("medium.en", device="cpu", compute_type="int8")
    logger.info("Model loaded successfully.")
    yield
    model = None


app = FastAPI(lifespan=lifespan)


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    try:
        audio_bytes = await audio.read()
        audio_stream = io.BytesIO(audio_bytes)

        segments, info = model.transcribe(audio_stream, beam_size=5)
        transcript = " ".join(segment.text.strip() for segment in segments)

        return {
            "transcript": transcript,
            "duration_seconds": round(info.duration, 2),
            "language": info.language,
        }
    except Exception as e:
        logger.exception("Transcription failed")
        raise HTTPException(status_code=500, detail=str(e))
