import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import Sorry from '../audio/Sorry.mp3';
import SorryTranscript from '../transcripts/Sorry.vtt';
import Josh from '../images/Josh.png';

export default function QuestionAudio() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bold Italic',
      ].join(','),
    },
  });

  return (
    <center>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ pb: 1.5 }}>
          <Avatar
            alt="Josh Belser"
            src={Josh}
            sx={{
              boxShadow: 5, width: 36, height: 36,
            }}
          />
          <Typography variant="h5">Joshua asks:</Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mx: 2 }}>
          <audio controls>
            <source src={Sorry} type="audio/mpeg" />
            <track src={SorryTranscript} kind="captions" srcLang="en" label="english_captions" />
            Your browser does not support the audio element.
          </audio>
          <Button variant="contained" size="small" sx={{ bgcolor: '#777490', boxShadow: 10 }}>
            <Typography variant="caption" sx={{ fontsize: 0.1, p: 0 }}>
              Convert to Text
            </Typography>
          </Button>
        </Stack>
        <hr style={{ width: '92%' }} />
      </ThemeProvider>
    </center>
  );
}
