import React from "react";

type Props = {
  error: string;
};
export default function CustomErrorMessage(props: Props) {
  return (
    <span className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
      {props.error}
    </span>
  );
}
