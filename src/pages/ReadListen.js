import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GroupName from '../components/GroupName';
import QuestionAudio from '../components/QuestionAudio';
import AnswerPlayer from '../components/AnswerPlayer';
import Piglet from '../images/piglet.png';
import Pooh from '../images/pooh.png';
import Tigger from '../images/tigger.png';

import Fire from '../audio/You Are My Fire.mp3';
import Desire from '../audio/The One Desire.mp3';
import Believe from '../audio/Believe When I Say.mp3';
import Want from '../audio/I Want It That Way2.mp3';
import Two from '../audio/That We Are Two Worlds Apart.mp3';

export default function ReadListen() {
  return (
    <>
      <GroupName groupName="Long Live Pinto Bean" />
      <br />
      <QuestionAudio />
      <hr style={{ width: '92%' }} />
      <br />

      <Stack direction="row" spacing={2}>
        <div style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Avatar
            alt="Tigger"
            src={Tigger}
            sx={{
              boxShadow: 5, width: 36, height: 36,
            }}
          />
        </div>
        <AnswerPlayer currentSong={{ Fire }} />
      </Stack>
      <br />

      <Stack direction="row" spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }} sx={{ pr: 2 }}>
        <AnswerPlayer currentSong={{ Desire }} />
        <div style={{ paddingTop: 10 }}>
          <Avatar
            alt="Josh Belser"
            sx={{
              boxShadow: 5, width: 36, height: 36, bgcolor: '#b1b7c3',
            }}
          >
            JK
          </Avatar>
        </div>
      </Stack>
      <br />

      <Stack direction="row" spacing={2}>
        <div style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Avatar
            alt="Piglet"
            src={Piglet}
            sx={{
              boxShadow: 5, width: 36, height: 36,
            }}
          />
        </div>
        <AnswerPlayer currentSong={{ Believe }} sx={{ width: 10 }} />
      </Stack>
      <br />

      <Stack direction="row" spacing={2}>
        <div style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Avatar
            alt="Pooh"
            src={Pooh}
            sx={{
              boxShadow: 5, width: 36, height: 36,
            }}
          />
        </div>
        <AnswerPlayer currentSong={{ Want }} sx={{ width: 10 }} />
      </Stack>
      <br />

      <Stack direction="row" spacing={2}>
        <div style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Avatar
            alt="Josh Belser"
            sx={{
              boxShadow: 5, width: 36, height: 36, bgcolor: '#777490',
            }}
          >
            DM
          </Avatar>
        </div>
        <AnswerPlayer currentSong={{ Two }} sx={{ width: 10 }} />
      </Stack>
      <br />
    </>
  );
}
