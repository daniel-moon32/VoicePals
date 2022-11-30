/* eslint-disable max-len */
import { React, useState } from 'react';
import './style.css';
import {
  Button, Grid, TextField, DialogContent, DialogActions, Paper, ThemeProvider, createTheme,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useNavigate, useParams } from 'react-router-dom';
import GroupName from '../components/GroupName';
import Record from '../components/Record';

export default function AskQuestion({ groups, setGroups }) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorContent, setErrorContent] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [question, setQuestion] = useState('');
  const [blobURL, setBlobURL] = useState('');
  const { groupid } = useParams();
  const groupMembers = groups[groupid - 1].members.map((member) => member.name);
  const groupLeader = groups[groupid - 1].leader;
  let passTo = groupMembers;
  passTo = passTo.filter((item) => item !== groupLeader);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const groupName = groups[groupid - 1].group_name;
  const [selectedValue, setSelectedValue] = useState(groups[groupid - 1].leader);
  // const [loggedInUserName, setLoggedInUserName] = useState('Rakshana Jayaprakash');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value2) => {
    setSelectedValue(value2);
    setOpen(false);
  };

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
    if (question === '' && blobURL === '') {
      setError(true);
      setErrorContent('Please enter a question');
      return;
    }

    if (value === null) {
      setError(true);
      setErrorContent('Please select a date');
      return;
    }

    const groupCopy = [...groups];
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
      status: 'answer',
      members: groupMembers,
      leader: selectedValue,
      question: [{
        isUrl: !!blobURL,
        content: blobURL || question,
        username: selectedValue,
      }],
      responses: [],
      days_left: 7,
      due_date: value,
    };
    groupCopy[groupid - 1] = newGroup;
    setGroups(groupCopy);

    navigate(`/answer/${groupid}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="outerContainer">
        {error && (<Alert severity="error">{errorContent}</Alert>)}
        <GroupName groupName={groups[groupid - 1].group_name} />
        <Grid
          container
          direction="column"
          alignItems="center"
          rowSpacing={2}
          paddingTop={2}
        >
          <Grid item paddingLeft={3} paddingRight={2}>
            <Typography className="other-components">
              {`${groups[groupid - 1].members[0].name}, ${groups[groupid - 1].members[1].name}`}
              {groups[groupid - 1].members.length - 2 ? `, and ${groups[groupid - 1].members.length - 2} others have been added.` : ''}

            </Typography>
          </Grid>
          {selectedValue === groupLeader
            ? (
              <>
                <Grid item>
                  <Grid container direction="row" spacing={2} alignItems="center">
                    <Grid item alignItems="center">
                      <Paper
                        elevation={1}
                        style={{
                          paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 10,
                        }}
                      >
                        <Typography variant="subtitle1" component="div">
                          You are the group leader!
                        </Typography>
                      </Paper>

                    </Grid>

                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={handleClickOpen}
                        sx={{ color: '#a99aaf', borderColor: '#a99aaf' }}
                      >
                        Pass
                      </Button>
                      <SimpleDialog
                        selectedValue={selectedValue}
                        open={open}
                        onClose={handleClose}
                        groupMembers={passTo}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item width={300}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <DesktopDatePicker
                      width={200}
                      label="Responses due by"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item>
                  <Record blobURL={blobURL} setBlobURL={setBlobURL} question={question} setQuestion={setQuestion} />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      width: 200, padding: 1, margin: 2, color: '#ffffff', bgcolor: '#4682B4',
                    }}
                    onClick={() => handleSubmit()}
                  >
                    Done
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <Grid container direction="row" spacing={2} alignItems="center">
                    <Grid item alignItems="center">
                      <Paper
                        elevation={1}
                        style={{
                          paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 10,
                        }}
                      >
                        <Typography variant="subtitle1" component="div">
                          {selectedValue}
                          {' '}
                          is the group leader!
                        </Typography>
                      </Paper>

                    </Grid>

                    <Grid item>
                      <Button
                        variant="outlined"
                        disabled
                        onClick={handleClickOpen}
                      >
                        Pass
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item alignItems="center">
                  <hr />
                  <Typography variant="overline" component="div">
                    Waiting for new question
                  </Typography>
                  <hr />

                </Grid>
              </>
            )}
        </Grid>

      </div>
    </ThemeProvider>

  );
}

// https://mui.com/material-ui/react-dialog/

function SimpleDialog(props) {
  const {
    onClose, selectedValue, open, groupMembers,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

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
  return (
    <ThemeProvider theme={theme}>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Pick group leader</DialogTitle>
        <DialogContent>
          <List sx={{ pt: 0 }}>
            {groupMembers.map((email) => (
              <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.primary, color: theme.palette.secondary }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}

          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>

  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
