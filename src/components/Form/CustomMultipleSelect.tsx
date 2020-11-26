import React from "react";

type Props = {
  handleFieldChange: any;
  label: string;
  for: string;
};

export default function CustomMultipleStatusSelect(props: Props) {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.for}
      >
        {props.label}
      </label>
      <div className="relative">
        <select
          onChange={props.handleFieldChange}
          className=" shadow appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border border-gray-300 focus:border-orange-500"
          id="grid-state"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled hidden>
            Select a status
          </option>
          {["confirmed", "recovered", "deaths"].map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
