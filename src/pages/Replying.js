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

export default function Replying({ data }) {
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
        <GroupName groupName={data[groupid - 1].group_name} />

        <Grid item width={390} marginTop={2}>
          <QuestionAudio question={data[groupid - 1].question} />
        </Grid>
        <Grid item width={390}>
          <hr style={{ width: '92%' }} />
        </Grid>
        <Grid item width={390}>
          <TimeTravel peopleReplying={data[groupid - 1].responses.length} />
        </Grid>
        <Grid item>
          <DaysLeft days={data[groupid - 1].days_left} />
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
