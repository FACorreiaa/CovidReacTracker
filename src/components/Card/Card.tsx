import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  title: string;
  value: number;
  icon: string;
};
export default function CustomCard(props: Props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <i className={props.icon}></i>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {props.title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {props.value}
          </p>
        </div>
      </div>
    </>
  );
}
