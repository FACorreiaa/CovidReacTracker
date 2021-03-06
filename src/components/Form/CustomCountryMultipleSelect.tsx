import React from "react";

type Props = {
  handleFieldChange: any;
  countryList: [];
  selectValue: string;
  name?: string;
  ref?: any;
};

export default function CustomCountryMultipleSelect(props: Props) {
  return (
    <>
      <select
        onChange={props.handleFieldChange}
        className="hover:border-none focus:border-orange-300 shadow appearance-none bg-white  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border border-gray-300"
        id="grid-state"
        name={props.name}
        ref={props.ref}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          Select a Country
        </option>
        {props.countryList.map((selectValue) => {
          return (
            <option key={selectValue} className="" value={selectValue}>
              {selectValue}
            </option>
          );
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
