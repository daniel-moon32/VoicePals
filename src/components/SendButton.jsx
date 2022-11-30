import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Link, useParams } from 'react-router-dom';

export default function SendButton() {
  const { groupid } = useParams();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#a99aaf',
      },
      secondary: {
        main: '#777490',
      },
    },
    typography: {
      fontFamily: [
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <center>
      <ThemeProvider theme={theme}>
        <Link to={`/answer/wait/${groupid}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button variant="contained" sx={{ color: 'white', bgcolor: '#777490', boxShadow: 10 }}>
            Send
          </Button>
        </Link>
      </ThemeProvider>
    </center>
  );
}
