import React from "react";

type Props = {
  title: string;
};
export default function CustomTitle(props: Props) {
  return <h1 style={{ textAlign: "center" }}>{props.title}</h1>;
}
