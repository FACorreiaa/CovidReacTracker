import React from "react";

type Props = {
  error: string;
};
export default function CustomErrorMessage(props: Props) {
  return (
    <span className="block uppercase tracking-wide  border bg-red-100 border-red-400 rounded-b text-red-400 text-xs font-bold mb-2">
      {props.error}
    </span>
  );
}

//border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700
