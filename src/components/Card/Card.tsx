import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <SvgIcon {...props}>
            <path d={props.icon} />
          </SvgIcon>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
