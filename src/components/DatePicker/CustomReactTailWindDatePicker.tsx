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
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.for}
      >
        {props.label}
      </label>
      <DatePicker
        className="text-black text-nav p-button w-button text-center shadow-button rounded-button"
        selected={props.selected}
        onChange={props.onChange}
      />
    </>
  );
}
