import React from "react";

type SuccessProps = {
  title: string;
  message: string;
};
export default function SuccessMessages(props: SuccessProps) {
  return (
    <div className="bg-transparent text-center py-4 lg:px-4">
      <div
        className="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          {props.title}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {props.message}
        </span>
      </div>
    </div>
  );
}
