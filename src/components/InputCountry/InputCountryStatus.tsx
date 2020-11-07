import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem, Select } from "@material-ui/core";

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
};

export default function InputCountryStatus(props: Props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
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
