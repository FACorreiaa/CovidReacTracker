import React from "react";

type ButtonsProps = {
  onClick: any;
  type: any;
  value: string;
};
export default function FormButton(props: ButtonsProps) {
  return (
    <button
      className="flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-none focus:shadow-nav focus:outline-none focus:border-none hover:bg-gray-700 text-sm border-4 text-white py-1 px-2 rounded "
      onClick={props.onClick}
      type={props.type}
    >
      {props.value}
    </button>
  );
}
