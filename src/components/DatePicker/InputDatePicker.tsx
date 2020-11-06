import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
  myRef: any;
  onChange: any;
  label: string;
  value: string;
  handleDateChange: any;
};

export default function CustomInputDatePicker(props: Props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={props.value}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
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
