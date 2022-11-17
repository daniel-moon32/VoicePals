import * as React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import QuestionPlayer from './QuestionPlayer';

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
        <QuestionPlayer />
      </ThemeProvider>
    </center>
  );
}
