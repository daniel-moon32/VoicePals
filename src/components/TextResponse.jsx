import * as React from 'react';
import Box from '@mui/material/Box';

import {
  createTheme, styled,
  Paper, Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function TextResponse() {
  const CustomPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F0F0F0',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(1.5),
    paddingRight: theme.spacing(1),
  }));

  return (
    <CustomPaper>
      <Typography sx={{ p: 0.55 }} variant="subtitle2">Messages Time Traveling...</Typography>
    </CustomPaper>
  );
}
