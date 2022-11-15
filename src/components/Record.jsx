import { IconButton, TextButton } from "@mui/material";
import { MicIcon } from "@mui/icons-material";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { useState } from "react";

const Record = () => {
  const [record, setRecord] = useState(RecordState.STOP);
  const handleStop = (audioData) => {
    console.log(audioData);
  };
  return (
    <div>
      <AudioReactRecorder state={record} onStop={handleStop} />
      <IconButton
        onClick={() =>
          setRecord(
            record === RecordState.STOP ? RecordState.STOP : RecordState.START
          )
        }
      >
        <MicIcon />
      </IconButton>
      <TextButton>Type Instead</TextButton>
    </div>
  );
};

export default Record;
