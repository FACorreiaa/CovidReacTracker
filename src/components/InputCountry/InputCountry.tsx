import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

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
};

export default function InputCountryForm(props: Props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
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
