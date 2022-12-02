// import { useParams } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { createTheme, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import DaysLeft from '../components/DaysLeft';
import GroupName from '../components/GroupName';
import SendButton from '../components/SendButton';
import TimeTravel from '../components/TimeTravel';
import QuestionAudio from '../components/QuestionAudio';
import Record from '../components/Record';


export default function Replying({ groups, setGroups }) {
  const navigate = useNavigate();
  const { groupid } = useParams();
  const [ansBlobURL, setAnsBlobURL] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [errorContent, setErrorContent] = useState('');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4682B4',
      },
      secondary: {
        main: '#2C2F33',
      },
    },
    typography: {
      fontFamily: [
        'sans-serif',
      ].join(','),
    },
  });

  function handleSubmit() {
    if (answer === '' && ansBlobURL === '') {
      setError(true);
      setErrorContent('Please enter the answer');
      return;
    }
    const { responses } = groups[groupid - 1];

    const newGroups = [...groups];

    if (ansBlobURL === '') {
      responses.push({
        isURL: false,
        content: answer,
        username: groups[groupid - 1].leader,
      });
    }

    if (answer === '') {
      responses.push({
        isURL: true,
        content: ansBlobURL,
        username: groups[groupid - 1].leader,
      });
    }

    newGroups[groupid - 1].responses = responses;
    setGroups(newGroups);
    navigate(`/answer/wait/${groupid}`);
  }

  return (
    <>
      {error && (<Alert severity="error">{errorContent}</Alert>)}
      <Grid
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        paddingTop={2}
      >
        <GroupName groupName={groups[groupid - 1].group_name} />

        <Grid item width={390} marginTop={2}>
          <QuestionAudio question={groups[groupid - 1].question} />
        </Grid>
        <Grid item width={390}>
          <hr style={{ width: '92%' }} />
        </Grid>
        <Grid item width={390}>
          <TimeTravel peopleReplying={groups[groupid - 1].responses.length} />
        </Grid>
        <Grid item>
          <DaysLeft days={groups[groupid - 1].days_left} />
        </Grid>

        <Grid item>
          <Record
            blobURL={ansBlobURL}
            setBlobURL={setAnsBlobURL}
            question={answer}
            setQuestion={setAnswer}
          />
        </Grid>

        {/* <SendButton /> */}
        <Grid item>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              sx={{
                width: 200, padding: 1, margin: 2, color: '#ffffff', bgcolor: '#4682B4',
              }}
              onClick={() => handleSubmit()}
            >
              Send
            </Button>
          </ThemeProvider>
        </Grid>

      </Grid>
    </>
  );
}
