import React from "react";
import { Link } from "react-router-dom";

type Props = {
  label: string;
  onClick?: any;
  children?: any;
};
export default function CustomButton(props: Props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="text-nav-color text-nav p-button w-button text-center shadow-button rounded-button"
      >
        {props.label}
        {props.children}
      </button>
    </div>
  );
}
