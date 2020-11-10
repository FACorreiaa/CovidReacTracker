import React from "react";

type Props = {
  myRef?: any;
  onChange: any;
  label: string;
  for: string;
  id: string;
  type: string;
  placeholder: string;
};

export default function CustomInputCountryForm(props: Props) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.for}
      >
        {props.label}
      </label>
      <input
        onChange={props.onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </>
  );
}
