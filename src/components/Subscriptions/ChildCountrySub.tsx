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
  title: string;
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
  title,
}) => (
  <>
    <form className="w-full max-w-sm shadow-md rounded">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-3/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="inline-full-name"
          >
            {title}
          </label>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="inline-full-name"
          >
            {countryLabel}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="inline-full-name"
            type="email"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="inline-password"
          >
            {selectLabel}
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            onChange={handleFieldChange}
            className="shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            onSubmit={onSubmit}
            className="flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Send<i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </form>
  </>
);
