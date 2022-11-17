import { Avatar, Paper, IconButton } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

export default function Reply({
  avatar, audio, text, isGroupLeader,
}) {
  return (
    <>
      <Avatar sx={{ float: isGroupLeader ? 'left' : 'right', margin: '5px' }} alt="Profile Picture" src={avatar} />
      <Paper sx={{ width: '80%', display: 'inline-block', margin: '10px' }}>
        <IconButton>
          <PlayCircleOutlineRoundedIcon />
        </IconButton>
      </Paper>
    </>
  );
}
