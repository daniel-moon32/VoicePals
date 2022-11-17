import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { Link } from 'react-router-dom';

// function that need html render, should start w/ uppercase letter
// arrow func, React.createElement works too;
// without jsx works too, call {questionIcon} in render
function QuestionIcon() {
  return (
    <PsychologyAltIcon
      sx={{
        fontSize: 35,
        color: '#777490',
      }}
    />
  );
}
function ListenIcon() {
  return (
    <PlayCircleIcon
      sx={{
        fontSize: 35,
        color: '#777490',
      }}
    />
  );
}
function AnswerIcon() {
  return (
    <KeyboardVoiceIcon
      sx={{
        fontSize: 35,
        color: '#777490',
      }}
    />
  );
}

function getLink(status) {
  if (status === 'ask') {
    return '/ask';
  } if (status === 'listen') {
    return '/listen';
  } if (status === 'answer') {
    return '/answer';
  }

  return '/';
}

export default function GroupBanner() {
  const question = 'Your turn to ask questions!';
  const listen = 'Answers are ready!';
  const answer = 'Someone has posted a question!';

  const messages = [
    {
      id: 1,
      primary: 'THE UNORIGINAL DR. JAQ',
      secondary: question,
      person: 'groupimage/4.jpeg',
      status: 'ask',
      Person2: QuestionIcon, // Json uppercase letter too
    },
    {
      id: 2,
      primary: 'HAPPY FAMILIES',
      secondary: answer,
      person: 'groupimage/2.jpeg',
      status: 'answer',
      Person2: AnswerIcon,
    },
    {
      id: 3,
      primary: 'Smart peoPle',
      secondary: question,
      person: 'groupimage/3.jpeg',
      status: 'ask',
      Person2: QuestionIcon,
    },
    {
      id: 4,
      primary: 'I hate Onions!',
      secondary: listen,
      person: 'groupimage/1.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
    {
      id: 5,
      primary: 'Long Live Pinto Bean',
      secondary: listen,
      person: 'groupimage/5.jpeg',
      status: 'listen_question',
      Person2: ListenIcon,
    },
    {
      id: 6,
      primary: 'Discussion',
      secondary: listen,
      person: 'groupimage/6.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
    {
      id: 7,
      primary: 'Summer BBQ',
      secondary: listen,
      person: 'groupimage/7.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
    {
      id: 8,
      primary: 'Forever Friend',
      secondary: listen,
      person: 'groupimage/8.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
    {
      id: 9,
      primary: 'Running man',
      secondary: listen,
      person: 'groupimage/9.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
    {
      id: 10,
      primary: 'Reading and Health',
      secondary: listen,
      person: 'groupimage/10.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
    {
      id: 11,
      primary: 'Secret Place',
      secondary: listen,
      person: 'groupimage/11.jpeg',
      status: 'listen',
      Person2: ListenIcon,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 730,
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
            id, primary, secondary, person, status, Person2,
          }) => (
            <React.Fragment key={id}>
              {id === 1 && (
              <>
                <Divider />
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              </>
              )}
              {id === 2 && (
              <>
                <Divider />
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  November 16th
                </ListSubheader>
              </>
              )}
              {id === 5 && (
              <>
                <Divider />
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  One Week Ago
                </ListSubheader>
              </>
              )}
              {id === 8 && (
              <>
                <Divider />
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  One Month Ago
                </ListSubheader>
              </>
              )}

              <Divider variant="inset" component="li" />
              <Link to={`${getLink(status)}/1`} style={{ color: 'black', textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'background.paper' }}>
                      <Person2 />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              </Link>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
