import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import CustomButton from "../Button/CustomButton";

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
  myRef?: any;
  onChange: any;
  label: string;
  for: string;
  id: string;
  type: string;
  placeholder: string;
};

export default function CustomInputCountryForm(props: Props) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.for}
      >
        {props.label}
      </label>
      <input
        onChange={props.onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </>
  );
}
