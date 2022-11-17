import React, { useState, useEffect, useRef } from 'react';
import {
  styled, Typography, Slider,
  Paper, Stack, Box,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import fade from '../music/As You Fade Away - NEFFEX.mp3';
import enough from '../music/Enough - NEFFEX.mp3';
import immortal from '../music/Immortal - NEFFEX.mp3';
import playDead from '../music/Play Dead - NEFFEX.mp3';
import winning from '../music/Winning - NEFFEX.mp3';
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
  color: '#777490',
  height: 2,
  '&:hover': {
    cursor: 'auto',
  },
  '& .MuiSlider-thumb': {
    width: '13px',
    height: '13px',
    display: props.thumbless ? 'none' : 'block',
  },
}));

const playlist = [fade, enough, immortal, playDead, winning];

export default function Player() {
  const audioPlayer = useRef();

  const [index] = useState(0);
  const [hasText, setHasText] = useState(false);

  const [currentSong] = useState(playlist[index]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(30);
  const [mute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const duration2 = Math.floor(audioPlayer?.current?.duration);
        const elapsed2 = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(duration2);
        setElapsed(elapsed2);
      }, 100);
    }
  }, [
    volume, isPlaying,
  ]);

  function formatTime(time) {
    if (time && !Number.isNaN(time)) {
      const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
      const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return '00:00';
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
              alt="Josh Belser"
              src={Josh}
              sx={{
                boxShadow: 5, width: 36, height: 36,
              }}
            />
            <Typography variant="h5">Joshua</Typography>
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
            ? <PlayArrowIcon fontSize="large" sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={togglePlay} />
            : <PauseIcon fontSize="large" sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={togglePlay} />}
          <Typography sx={{ color: '#777490' }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: '#777490' }}>{formatTime(duration - elapsed)}</Typography>
          <ConvertText setHasText={setHasText} />
        </Stack>
      </CustomPaper>
      {hasText && (<Typography>Testing text for transcipt</Typography>)}
      {/* TODO: Transcript text Here */}
    </>
  );
}
