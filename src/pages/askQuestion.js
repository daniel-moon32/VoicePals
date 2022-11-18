/* eslint-disable max-len */

import { React, useEffect, useState } from 'react';
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

import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useLocation, useParams } from 'react-router-dom';
import GroupName from '../components/GroupName';
import Record from '../components/Record';

const groupMembers = ['Qiyuan Cheng', 'Allen Shen', 'Joseph Kuang', 'Daniel Moon'];

export default function AskQuestion({ data }) {
  const [value, setValue] = useState(null);

  const { groupid } = useParams();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Rakshana Jayaprakash');
  // const [loggedInUserName, setLoggedInUserName] = useState('Rakshana Jayaprakash');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value2) => {
    setOpen(false);
    setSelectedValue(value2);
  };

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
    <ThemeProvider theme={theme}>
      <div className="outerContainer">
        <GroupName groupName={data[groupid - 1].group_name} />
        <Grid
          container
          direction="column"
          alignItems="center"
          rowSpacing={2}
          paddingTop={2}
        >
          <Grid item paddingLeft={3} paddingRight={2}>
            <Typography className="other-components">
              {data[groupid - 1].members[0].name}
              {' , '}
              {data[groupid - 1].members[1].name}
              {' '}
              and
              {' '}
              {data[groupid - 1].members.length}
              {' '}
              others have been added.
            </Typography>
          </Grid>
          {selectedValue === 'Rakshana Jayaprakash'
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
                  <Record />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      width: 200, padding: 1, margin: 2, color: '#ffffff', bgcolor: '#777490',
                    }}
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
                      <SimpleDialog
                        selectedValue={selectedValue}
                        open={open}
                        onClose={handleClose}
                      />
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
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

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
