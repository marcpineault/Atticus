import os
import tempfile
import whisper
from fastapi import FastAPI, File, UploadFile, HTTPException

app = FastAPI()

MODEL_SIZE = os.getenv("WHISPER_MODEL", "base")
model = whisper.load_model(MODEL_SIZE)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    suffix = os.path.splitext(audio.filename or "audio.mp3")[1] or ".mp3"

    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(await audio.read())
        tmp_path = tmp.name

    try:
        result = model.transcribe(tmp_path)
        duration = result.get("segments", [{}])[-1].get("end", 0) if result.get("segments") else 0
        return {
            "transcript": result["text"].strip(),
            "duration_seconds": round(duration, 2),
            "language": result.get("language", "en"),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        os.unlink(tmp_path)
