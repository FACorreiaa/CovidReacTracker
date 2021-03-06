import React, { FunctionComponent } from "react";

type Props = {
  labelId: string;
  id: any;
  handleFieldChange: any;
  countryList: string[];
  value: string;
  for: string;
  label: string;
};

export const CustomSubscriptionMultiSelect: FunctionComponent<Props> = ({
  labelId,
  id,
  handleFieldChange,
  countryList,
  value,
  label,
}) => (
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      {label}
    </label>
    <div className="relative">
      <select
        onChange={handleFieldChange}
        className="appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white border-gray-300 focus:border-orange-500"
        id="grid-state"
      >
        {countryList.map((value) => {
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
