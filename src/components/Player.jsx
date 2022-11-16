/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import {
  styled, Typography, Slider,
  Paper, Stack, Box,
} from '@mui/material';

// #region ------------ ICONS ---------
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// #endregion ------------ ICONS ---------

// #region ------- Tracts -------------------------------------------------------
import fade from '../music/As You Fade Away - NEFFEX.mp3';
import enough from '../music/Enough - NEFFEX.mp3';
import immortal from '../music/Immortal - NEFFEX.mp3';
import playDead from '../music/Play Dead - NEFFEX.mp3';
import winning from '../music/Winning - NEFFEX.mp3';
// #endregion ---------------------------------------------------------------

// #region -------- Styled Components -----------------------------------------
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
// #endregion ---------------------------------------------------------------

const playlist = [fade, enough, immortal, playDead, winning];

export default function Player() {
  const audioPlayer = useRef();

  const [index, setIndex] = useState(0);

  const [currentSong] = useState(playlist[index]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(30);
  // const [volume, setVolume] = useState(30);
  // const [mute, setMute] = useState(false);
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

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      // eslint-disable-next-line prefer-destructuring
      audioPlayer.current.src = playlist[0];
      audioPlayer.current.play();
    } else {
      setIndex((prev) => prev + 1);
      audioPlayer.current.src = playlist[index + 1];
      audioPlayer.current.play();
    }
  };

  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      audioPlayer.current.src = playlist[index - 1];
      audioPlayer.current.play();
    }
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  // function VolumeBtns() {
  //   // eslint-disable-next-line no-nested-ternary
  //   return mute
  //     ? <VolumeOffIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
  //     // eslint-disable-next-line no-nested-ternary
  //     : volume <= 20 ? <VolumeMuteIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
  //       : volume <= 75 ? <VolumeDownIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
  //         : <VolumeUpIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />;
  // }

  return (
    <>
      <audio src={currentSong} ref={audioPlayer} muted={mute} />
      <CustomPaper>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {/* <Stack
            direction="row"
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '25%',
              alignItems: 'center',
            }}
          > */}
          {/* <VolumeBtns /> */}

          {/* <PSlider
            min={0}
            max={100}
            value={volume}
            onChange={(e, v) => setVolume(v)}
          /> */}
          {/* </Stack> */}

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SkipPreviousIcon
              sx={{
                color: '#777490',
                '&:hover': { color: 'white' },
              }}
              onClick={toggleSkipBackward}
              disabled
            />
            <FastRewindIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={toggleBackward} />

            {!isPlaying
              ? <PlayArrowIcon fontSize="large" sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={togglePlay} />
              : <PauseIcon fontSize="large" sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={togglePlay} />}

            <FastForwardIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={toggleForward} />
            <SkipNextIcon sx={{ color: '#777490', '&:hover': { color: 'white' } }} onClick={toggleSkipForward} />
          </Stack>

          <Stack sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          />
        </Box>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ color: '#777490' }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: '#777490' }}>{formatTime(duration - elapsed)}</Typography>
        </Stack>
      </CustomPaper>
    </>
  );
}
