import React, { useState, useEffect, useRef } from 'react';
import {
  styled, Typography, Slider,
  Paper, Stack, Box,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Josh from '../images/Josh.png';
import ConvertText from './ConvertText';

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F5F5F5',
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(4),
  marginBottom: theme.spacing(1.5),
  padding: theme.spacing(1),
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: '#4682B4',
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

export default function QuestionPlayer({ question }) {
  const playlist = question;
  const audioPlayer = useRef();

  const [index] = useState(0);
  const [hasText, setHasText] = useState(false);

  const [currentSong] = useState(playlist[index].content);

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
    const seconds = Math.floor(audioPlayer.current.duration - minutes * 60);
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
      <CustomPaper>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ pb: 0.1 }}>
            <Avatar
              alt="  Belser"
              src={Josh}
              sx={{
                boxShadow: 5, width: 36, height: 36,
              }}
            />
            <Typography variant="h5">{question[0].username}</Typography>
          </Stack>
        </Box>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            pr: 0,
          }}
        >
          {!isPlaying
            ? <PlayArrowIcon fontSize="large" sx={{ color: '#4682B4', '&:hover': { color: 'white' } }} onClick={togglePlay} />
            : <PauseIcon fontSize="large" sx={{ color: '#4682B4', '&:hover': { color: 'white' } }} onClick={togglePlay} />}
          <Typography sx={{ color: '#4682B4' }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: '#4682B4' }}>{formatTotalTime()}</Typography>
          <ConvertText setHasText={setHasText} />
        </Stack>
      </CustomPaper>
      {hasText && (
      <Box
        sx={{
          width: 80 / 100,
          border: 1,
          borderRadius: 1,
          boxShadow: 4,
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
          mb: 0,
        }}
      >
        <Typography style={{ overflowY: 'scroll', borderColor: 'red', borderWidth: 5 }} sx={{ height: 60, py: 0.5, px: 2 }}>
          How much wood would a woodchuck chuck, if a woodchuck could chuck wood? He would chuck,
          he would, as much as he could, and chuck as much wood as a woodchuck would.
        </Typography>
      </Box>
      )}
    </>
  );
}
