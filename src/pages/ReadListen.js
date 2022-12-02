import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, Button } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { useParams, Link } from 'react-router-dom';
import GroupName from '../components/GroupName';
import Player from '../components/Player';
import AnswerPlayer from '../components/AnswerPlayer';
import TextResponse from '../components/TextResponse';

import Josh from '../images/Josh.png';
import Piglet from '../images/piglet.png';
import Pooh from '../images/pooh.png';
import Tigger from '../images/tigger.png';

import question from '../audio/question.m4a';
import Fire from '../audio/You Are My Fire.mp3';
import Desire from '../audio/The One Desire.mp3';
import Believe from '../audio/Believe When I Say.mp3';
import Want from '../audio/I Want It That Way2.mp3';
import Two from '../audio/That We Are Two Worlds Apart.mp3';

export default function ReadListen({ data }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4682B4',
      },
      secondary: {
        main: '#99a5bf',
      },
    },
    typography: {
      fontFamily: [
        'sans-serif',
      ].join(','),
    },
  });
  const { groupid } = useParams();

  return (
    <>
      <GroupName groupName="Summer BBQ" />

      <ThemeProvider theme={theme}>
        <Link to={`/ask/${groupid}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#4682B4',
              boxShadow: 10,
            }}
          >
            Repeat loop
          </Button>
        </Link>
        <Paper style={{ overflowY: 'scroll', borderColor: 'red', borderWidth: 5 }} sx={{ height: 600, py: 1.5, px: 2 }}>
          <br />
          <Stack direction="row" spacing={1.5}>
            <div>
              <Avatar
                alt="Josh"
                src={Josh}
                sx={{
                  boxShadow: 5, width: 24, height: 24, float: 'right', mt: 1, ml: 0,
                }}
              />
            </div>
            <AnswerPlayer currentSong={question} sx={{ width: 10 }} />
          </Stack>
          <br />

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Fire} sx={{ width: 10 }} />
            <div>
              <Avatar
                alt="Pooh"
                src={Pooh}
                sx={{
                  boxShadow: 5, width: 24, height: 24, float: 'right', mt: 1, mr: 2.5,
                }}
              />
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Desire} sx={{ width: 10 }} />
            <div>
              <Avatar
                alt="Piglet"
                src={Piglet}
                sx={{
                  boxShadow: 5, width: 24, height: 24, float: 'right', mt: 1, mr: 2.5,
                }}
              />
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'flex-end' }}>
            <TextResponse text="Believe when I say I want it that way..." />
            <div>
              <Avatar
                sx={{
                  boxShadow: 5, width: 24, height: 24, float: 'right', mt: 1, mr: 2.5,
                }}
              >
                <Typography variant="subtitle2" sx={{ mt: 1 }} gutterBottom>JK</Typography>
              </Avatar>
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Want} sx={{ width: 10 }} />
            <div>
              <Avatar
                sx={{
                  boxShadow: 5, width: 24, height: 24, float: 'right', mt: 1, mr: 2.5,
                }}
              >
                <Typography variant="subtitle2" sx={{ mt: 1 }} gutterBottom>DM</Typography>
              </Avatar>
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'flex-end' }}>
            <TextResponse text="That we are two worlds apart..." />
            <div>
              <Avatar
                alt="Tigger"
                src={Tigger}
                sx={{
                  boxShadow: 5, width: 24, height: 24, float: 'right', mt: 1, mr: 2.5,
                }}
              />
            </div>
          </Stack>

        </Paper>
        <br />

        <Player
          playlist={[question, Fire, Desire, Believe, Want, Two]}
          sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
          }}
        />
      </ThemeProvider>
    </>
  );
}
