import React from "react";

type ButtonsProps = {
  onClick: any;
  type: any;
  value: string;
};
export default function FormButton(props: ButtonsProps) {
  return (
    <button
      className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm flex-shrink-0 hover:gray-700 border-gray-700 hover:border-none focus:shadow-nav focus:outline-none focus:border-none hover:bg-gray-700 border-none py-1 px-2"
      onClick={props.onClick}
      type={props.type}
    >
      {props.value}
    </button>
  );
}
