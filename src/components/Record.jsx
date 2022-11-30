import {
  IconButton, Button, Stack, Box, TextField,
} from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import { useState, useEffect } from 'react';

import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function Record({
  blobURL, setBlobURL, question, setQuestion,
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isTextbox, setIsTextbox] = useState(false);

  const start = () => {
    if (!isBlocked) {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording(true);
        });
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const newblobURL = URL.createObjectURL(blob);
        setBlobURL(newblobURL);
        setIsRecording(false);
      });
  };

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        setIsBlocked(false);
      },
      () => {
        setIsBlocked(true);
      },
    );
  }, []);

  return (
    <Box>
      <Stack spacing={2} sx={{ width: '100%', margin: 'auto' }}>
        <>
          <IconButton
            sx={{ margin: 'auto', display: 'block', outline: 'solid 3px grey' }}
            onClick={!isRecording ? start : stop}
          >
            {isRecording === false ? <KeyboardVoiceIcon sx={{ fontSize: 80 }} />
              : <StopIcon sx={{ fontSize: 80 }} />}
          </IconButton>
          <Button onClick={() => setIsTextbox(!isTextbox)}>Type Instead</Button>
          <audio controls src={blobURL} />
        </>
        {isTextbox
          && <TextField value={question} onChange={(e) => setQuestion(e.target.value)} />}
      </Stack>
    </Box>
  );
}

export default Record;
