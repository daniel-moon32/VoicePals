import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: '25px',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const EditIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function CreateGroupName({ value, setValue }) {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="sticky" sx={{ bgcolor: '#99a5bf' }}>
        <Toolbar style={{ minHeight: '55px' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none', marginLeft: '-20px' } }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={() => {}}
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Box>
          <Search>
            <EditIconWrapper>
              <EditIcon />
            </EditIconWrapper>
            <StyledInputBase
              placeholder="Enter Group Name"
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
