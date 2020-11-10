import React, { FunctionComponent } from "react";

type GeneralSubProps = {
  value: string;
  onChange: any;
  placeholder: string;
  onSubmit: any;
  label: string;
};
export const GeneralSubForm: FunctionComponent<GeneralSubProps> = ({
  placeholder,
  onChange,
  value,
  onSubmit,
  label,
}) => (
  <>
    <form className="w-full max-w-sm shadow-md rounded" onSubmit={onSubmit}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {label}
      </label>

      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          aria-label="email"
        />
        <button
          className="flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </form>
  </>
);
