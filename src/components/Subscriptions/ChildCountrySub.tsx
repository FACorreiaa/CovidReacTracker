import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input/Input";
import React, { FunctionComponent } from "react";

type CountrySubProps = {
  value: string;
  onChange: any;
  placeholder: string;
  onSubmit: any;
  countryLabel: string;
  selectLabel: string;
  handleFieldChange: any;
  countryList: string[];
  selectValue: string;
};
export const CountrySubForm: FunctionComponent<CountrySubProps> = ({
  placeholder,
  onChange,
  value,
  onSubmit,
  countryLabel,
  selectLabel,
  handleFieldChange,
  countryList,
  selectValue,
}) => (
  <>
    <form className="w-full max-w-sm shadow-md rounded" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            {countryLabel}
          </label>
          <input
            type="email"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {selectLabel}
          </label>
          <div className="relative">
            <select
              onChange={handleFieldChange}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {countryList.map((selectValue) => {
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
          </div>
        </div>
        <button
          className="flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </>
);
