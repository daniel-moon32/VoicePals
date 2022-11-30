import React, { useState, useEffect, useRef } from 'react';
import {
  styled, Typography, Slider,
  Paper, Stack,
} from '@mui/material';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F0F0F0',
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(4),
  marginBottom: theme.spacing(1.5),
  padding: theme.spacing(1),
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: '#777490',
  height: 5,
  '&:hover': {
    cursor: 'auto',
  },
  '& .MuiSlider-thumb': {
    width: '13px',
    height: '13px',
    display: props.thumbless ? 'none' : 'block',
  },
}));

export default function AnswerPlayer({ currentSong }) {
  const audioPlayer = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(30);
  const [mute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  let startup = true;

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying || startup) {
      setInterval(() => {
        const duration2 = Math.floor(audioPlayer?.current?.duration);
        const elapsed2 = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(duration2);
        setElapsed(elapsed2);
        startup = false;
      }, 100);
    }
  }, [
    volume, isPlaying,
  ]);

  function formatTime(time) {
    if (time && !Number.isNaN(time)) {
      const minutes = Math.floor(time / 60) < 10 ? `${Math.floor(time / 60)}` : Math.floor(time / 60);
      const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return '0:00';
  }

  function formatTotalTime() {
    if (audioPlayer.current === undefined) {
      return '0:00';
    }
    const minutes = Math.floor(audioPlayer.current.duration / 60);
    const seconds = Math.floor(audioPlayer.current.duration - minutes);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <audio src={currentSong} ref={audioPlayer} muted={mute} />
      <CustomPaper sx={{ width: 0.6 }}>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            pr: 0,
            left: true,
          }}
        >
          {!isPlaying
            ? <PlayArrowIcon fontSize="large" sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={togglePlay} />
            : <PauseIcon fontSize="large" sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={togglePlay} />}
          <Typography sx={{ color: '#777490' }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: '#777490' }}>{formatTotalTime()}</Typography>
        </Stack>
      </CustomPaper>
    </>
  );
}
