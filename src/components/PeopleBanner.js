import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

// function that need html render, should start w/ uppercase letter
// arrow func, React.createElement works too;
// without jsx works too, call {questionIcon} in render
function CheckIcon() {
  return (
    <Checkbox />
  );
}

export default function PeopleBanner() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bold Italic',
      ].join(','),
    },
  });
  const messages = [
    {
      id: 1,
      primary: 'Allen Shen',
      person: 'personavator/1.jpeg',
      Check: CheckIcon, // Json uppercase letter too
    },
    {
      id: 2,
      primary: 'Rakshana Jayaprakash',
      person: 'personavator/2.jpeg',
      Check: CheckIcon,
    },
    {
      id: 3,
      primary: 'Joseph Kuang',
      person: 'personavator/3.jpeg',
      Check: CheckIcon,
    },
    {
      id: 4,
      primary: 'Qiyuan Cheng',
      person: 'personavator/4.jpeg',
      Check: CheckIcon,
    },
    {
      id: 5,
      primary: 'Daniel Moon',
      person: 'personavator/5.jpeg',
      Check: CheckIcon,
    },
    {
      id: 6,
      primary: 'Easy Ice',
      person: 'personavator/6.jpeg',
      Check: CheckIcon,
    },
    {
      id: 7,
      primary: 'Conner Smith',
      person: 'personavator/7.jpeg',
      Check: CheckIcon,
    },
    {
      id: 8,
      primary: 'Luke Skywalker',
      person: 'personavator/8.jpeg',
      Check: CheckIcon,
    },
    {
      id: 9,
      primary: 'Cillian Murphy',
      person: 'personavator/9.jpeg',
      Check: CheckIcon,
    },
    {
      id: 10,
      primary: 'Bruce Wayne',
      person: 'personavator/10.jpeg',
      Check: CheckIcon,
    },
    {
      id: 11,
      primary: 'Hello Kitty',
      person: 'personavator/11.jpeg',
      Check: CheckIcon,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 520,
          overflow: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <Paper
          square
          sx={{
            pb: '50px',
          }}
        >
          <List sx={{ mb: 2 }}>

            {messages.map(({
              id, primary, secondary, person, Check,
            }) => (
              <React.Fragment key={id}>
                <Divider variant="inset" component="li" />

                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'background.paper' }}>
                      <Check />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>

              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
      <hr />
      <ThemeProvider theme={theme}>
        <Box
          align="center"
          sx={{ pt: 4 }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: '#777490',
              align: 'center',
              px: 3.5,
              py: 2,
            }}
          >
            Create Group
          </Button>
        </Box>
      </ThemeProvider>

    </>

  );
}
