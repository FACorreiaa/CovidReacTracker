import React from "react";
import CustomFormButton from "../Button/CustomFormButton";

type Props = {
  myRef?: any;
  onChange: any;
  label: string;
  for: string;
  id: string;
  type: string;
  placeholder: string;
};
//
export default function CustomInputCountryForm(props: Props) {
  return (
    <>
      <div className="md:w-1/3">
        <label
          className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={props.for}
        >
          {props.label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          onChange={props.onChange}
          className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        ></input>
      </div>
    </>
  );
}
