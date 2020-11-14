import React from "react";

type Props = {
  handleFieldChange: any;
  countryList: [];
  selectValue: string;
};

export default function CustomCountryMultipleSelect(props: Props) {
  return (
    <>
      <select
        onChange={props.handleFieldChange}
        className=" shadow appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        id="grid-state"
        name="selectValue"
      >
        <option value="" selected disabled hidden>
          Select a country
        </option>

        {props.countryList.map((selectValue) => {
          return <option value={selectValue}>{selectValue}</option>;
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
    </>
  );
}
