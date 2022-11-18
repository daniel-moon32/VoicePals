import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import GroupName from '../components/GroupName';
import Player from '../components/Player';
import AnswerPlayer from '../components/AnswerPlayer';

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

export default function ReadListen() {
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
        'Bold Italic',
      ].join(','),
    },
  });

  return (
    <>
      <GroupName groupName="Long Live Pinto Bean" />

      <ThemeProvider theme={theme}>
        <Paper style={{ overflowY: 'scroll', borderColor: 'red', borderWidth: 5 }} sx={{ height: 250, py: 1.5, px: 2 }}>
          <Stack direction="row" spacing={2}>
            <div>
              <Avatar
                alt="Josh"
                src={Josh}
                sx={{
                  boxShadow: 5, width: 36, height: 36, float: 'right', mt: 1, ml: 2,
                }}
              />
            </div>
            <AnswerPlayer currentSong={question} sx={{ width: 10 }} />
          </Stack>
          <br />

          <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Fire} sx={{ width: 10 }} />
            <div>
              <Avatar
                alt="Pooh"
                src={Pooh}
                sx={{
                  boxShadow: 5, width: 36, height: 36, float: 'right', mt: 1, mr: 2.5,
                }}
              />
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Desire} sx={{ width: 10 }} />
            <div>
              <Avatar
                alt="Piglet"
                src={Piglet}
                sx={{
                  boxShadow: 5, width: 36, height: 36, float: 'right', mt: 1, mr: 2.5,
                }}
              />
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Believe} sx={{ width: 10 }} />
            <div>
              <Avatar
                sx={{
                  boxShadow: 5, width: 36, height: 36, float: 'right', mt: 1, mr: 2.5,
                }}
              >
                JK
              </Avatar>
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Want} sx={{ width: 10 }} />
            <div>
              <Avatar
                sx={{
                  boxShadow: 5, width: 36, height: 36, float: 'right', mt: 1, mr: 2.5,
                }}
              >
                DM
              </Avatar>
            </div>
          </Stack>
          <br />

          <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <AnswerPlayer currentSong={Two} sx={{ width: 10 }} />
            <div>
              <Avatar
                alt="Tigger"
                src={Tigger}
                sx={{
                  boxShadow: 5, width: 36, height: 36, float: 'right', mt: 1, mr: 2.5,
                }}
              />
            </div>
          </Stack>
          <br />
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
