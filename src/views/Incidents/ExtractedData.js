import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import IncidentResults from '../../components/Tables/IncidentResults/IncidentResults'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //textAlign: 'center',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
  },
  formControl: {
    marginLeft: theme.spacing(2),
    minWidth: 300,
    fullWidth: true
  },
  textFieldFull: {
    width: '85ch',
  },
  textFieldHalf: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40ch',
  },
  button: {
    margin: theme.spacing(1),
    maxWidth: 100,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const branches = [
  'Bill of Materials',
  'Invoices',
  'Logistics Documents',
  'Bill of Quantities'
]

const statustypes = [
  'Completed',
  'Pending',
  'Processing',
  'Failed'
]

const templates = [
  'Template Type 1',
  'Template Type 2',
  'Template Type 3',
  'Template Type 4',
]


function getStyles(item, selectedItem, theme) {
  return {
    fontWeight:
      selectedItem.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Incidents = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = React.useState({
    documentType: [],
    statusType: [],
    template: [],
    fromDate: new Date('2015-08-18T21:11:54'),
    toDate: new Date(),
    fromTime: new Date('2015-08-18T21:11:54'),
    toTime: new Date(),
    dateFilter: false,
    timeFilter: false
  });

  const documentTypeChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    //triger to get relavent status
  };

  const statusChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const templateChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const filterEnableChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //common method to handle date changes
  const dateChangeHandler = (event, name) => {
    setState({ ...state, [name]: event });
  };

  return (
    <Paper className={classes.root}>
      <form className={classes.form} >
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="document-type-label">Document Type</InputLabel>
            <Select
              labelId="document-type-label"
              id="documentType"
              name="documentType"
              multiple
              value={state.documentType}
              onChange={documentTypeChangeHandler}
              input={<Input id="select-bank-branch" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {branches.map((branche) => (
                <MenuItem key={branche} value={branche} style={getStyles(branche, state.documentType, theme)}>
                  {branche}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="status-type-label">Status</InputLabel>
            <Select
              labelId="status-type-label"
              id="statusType"
              name="statusType"
              multiple
              value={state.statusType}
              onChange={statusChangeHandler}
              input={<Input id="select-status-type" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {statustypes.map((status) => (
                <MenuItem key={status} value={status} style={getStyles(status, state.statusType, theme)}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="template-label">Template</InputLabel>
            <Select
              labelId="template-label"
              id="template"
              name="template"
              multiple
              value={state.template}
              onChange={templateChangeHandler}
              input={<Input id="select-template" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {templates.map((template) => (
                <MenuItem key={template} value={template} style={getStyles(template, state.template, theme)}>
                  {template}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Divider />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.dateFilter}
                      onChange={filterEnableChangeHandler} name="dateFilter"
                      color="primary" />
                  }
                  label="Date Filter"
                />
              </FormControl>
            </FormGroup>
            {state.dateFilter ?
              <FormGroup row>
                <FormControl className={classes.formControl}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="from-date-picker"
                    label="From: "
                    value={state.fromDate}
                    onChange={(event)=>dateChangeHandler(event,"fromDate")}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="to-date-picker"
                    label="To: "
                    value={state.toDate}
                    onChange={(event)=>dateChangeHandler(event,"toDate")}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </FormControl>
              </FormGroup>
              : null}
          </div>
          <Divider />
          <div>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.timeFilter}
                      onChange={filterEnableChangeHandler} name="timeFilter"
                      color="primary" />
                  }
                  label="Time Filter"
                />
              </FormControl>
            </FormGroup>
            {state.timeFilter ?
              <FormGroup row>
                <FormControl className={classes.formControl}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="from-time-picker"
                    label="From: "
                    value={state.fromTime}
                    onChange={(event)=>dateChangeHandler(event,"fromTime")}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="to-time-picker"
                    label="To:"
                    value={state.toTime}
                    onChange={(event)=>dateChangeHandler(event,"toTime")}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </FormControl>
              </FormGroup>
              : null}
          </div>
        </MuiPickersUtilsProvider>
        <Divider />
        <div>
          <FormGroup row>
            <FormControl className={classes.formControl}>
              <Button variant="contained" color="primary" size="small" className={classes.button} startIcon={<SearchIcon />}>
                Search
              </Button>
            </FormControl>
          </FormGroup>
        </div>
        <Divider />



        <div>
          <FormGroup row>
            <FormControl className={classes.formControl}>
            <IncidentResults />
            </FormControl>
          </FormGroup>
        </div>



      </form>
    </Paper>
  );
}

export default Incidents;