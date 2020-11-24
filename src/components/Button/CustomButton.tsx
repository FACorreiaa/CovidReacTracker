import React from "react";

type Props = {
  label: string;
  onClick?: any;
  children?: any;
};
//
export default function CustomButton(props: Props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="text-nav-color text-nav p-button w-button text-center shadow-button rounded-button tiny:w-3/6 tiny:h-3/6 tiny:text-sm"
      >
        {props.label}
        {props.children}
      </button>
    </div>
  );
}
