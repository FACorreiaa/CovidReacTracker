import "date-fns";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

type props = {
  selected: Date | null;
  onChange: any;
  for: string;
  label: string;
};
export default function CustomReactTailWindDatePicker(props: props) {
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
        <DatePicker
          className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          selected={props.selected}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
