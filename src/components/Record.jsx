import { IconButton, Button } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import { useState, useEffect } from 'react';

import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function Record() {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  const start = () => {
    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording(true);
        }).catch((e) => console.error(e));
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
      }).catch((e) => console.log(e));
  };

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log('Permission Granted');
        setIsBlocked(false);
      },
      () => {
        console.log('Permission Denied');
        setIsBlocked(true);
      },
    );
  }, []);

  return (
    <div>
      <IconButton
        onClick={!isRecording ? start : stop}
      >
        {isRecording === false ? <KeyboardVoiceIcon /> : <StopIcon />}
      </IconButton>
      <Button>Type Instead</Button>

      <audio controls src={blobURL} />
    </div>
  );
}

export default Record;
