import React from "react";

type Props = {
  title: string;
  error: string;
};
export default function ErrorMessage(props: Props) {
  return (
    <div>
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          {props.title}
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{props.error}</p>
        </div>
      </div>
    </div>
  );
}
