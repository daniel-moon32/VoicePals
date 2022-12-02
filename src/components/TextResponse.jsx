import * as React from 'react';
import Box from '@mui/material/Box';

import {
  styled, Paper, Typography,
} from '@mui/material';

export default function TextResponse({ text }) {
  const CustomPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F0F0F0',
    paddingRight: theme.spacing(1),
    typography: {
      fontFamily: ['sans-serif'].join(','),
    },
  }));

  return (
    <CustomPaper sx={{ width: 0.55 }}>
      <Typography sx={{ p: 1, color: '#26517a' }} variant="subtitle2">{ text }</Typography>
    </CustomPaper>
  );
}
