import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
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
  onChange: any;
  from: string;
  to: string;
  inputFromValue: any;
  handleFromDateChange: any;
  inputToValue: any;
  handleToDateChange: any;
};

export default function CustomDoubleDatePicker(props: Props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-from"
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
          id="date-to"
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

      <Button variant="contained" onClick={props.onClick}>
        Submit
      </Button>
    </form>
  );
}
