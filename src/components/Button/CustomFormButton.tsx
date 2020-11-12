import React from "react";
import { Link } from "react-router-dom";

type Props = {
  label: string;
  onClick?: any;
  children?: any;
};
export default function CustomFormButton(props: Props) {
  return (
    <div>
      <button
        type="button"
        onClick={props.onClick}
        className="text-black items-center shadow-nav rounded-nav  bg-nav hover:bg-black-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4"
      >
        {props.label}
        {props.children}
      </button>
    </div>
  );
}
