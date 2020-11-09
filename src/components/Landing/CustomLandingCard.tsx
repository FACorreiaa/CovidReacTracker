import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type Props = {
  title: string;
  value: string;
  icon?: string;
};
export default function CustomLandingCard(props: Props) {
  return (
    <section className="w-card box-border p-card h-350 rounded-card text-card shadow-card first:bg-light-card first:text-white last:bg-dark-card last:text-white">
      <div>
        {" "}
        <i className={props.icon}>
          <h2>{props.title}</h2>
        </i>
      </div>
      <p>{props.value}</p>
    </section>
  );
}
