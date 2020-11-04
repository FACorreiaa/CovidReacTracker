import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "48ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline-flex",
    },
  })
);

type Props = {
  country: string;
  value: number;
};

export default function CustomList(props: Props) {
  const classes = useStyles();

  return (
    <>
      <List
        component="div"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {props.country}: {props.value}
          </ListSubheader>
        }
        className={classes.root}
      >
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}
