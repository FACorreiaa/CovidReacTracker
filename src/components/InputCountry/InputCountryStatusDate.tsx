import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem, Select } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

type Props = {
  onClick: any;
  myRef: any;
  onChange: any;
  label: string;
  value: string;
  handleFieldChange: any;
  labelId: string;
  id: string;
  from: string;
  to: string;
  inputFromValue: any;
  inputToValue: any;
  handleFromDateChange: any;
  handleToDateChange: any;
};

export default function InputCountryStatusDate(props: Props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select From Date"
          format="yyyy-MM-dd"
          value={props.from}
          inputValue={props.inputFromValue}
          onChange={props.handleFromDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select To Date"
          format="yyyy-MM-dd"
          value={props.to}
          inputValue={props.inputToValue}
          onChange={props.handleToDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <Select
        labelId={props.labelId}
        id={props.id}
        value={props.value}
        onChange={props.handleFieldChange}
      >
        {["confirmed", "recovered", "deaths"].map((value) => {
          return (
            <MenuItem
              value={value}
              style={{ height: "4em", width: "7em", textAlign: "left" }}
            >
              {value}
            </MenuItem>
          );
        })}
      </Select>
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        ref={props.myRef}
        onChange={props.onChange}
      />

      <Button variant="contained" onClick={props.onClick}>
        Submit
      </Button>
    </form>
  );
}
