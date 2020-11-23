import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ConfirmationMessage from "./ConfirmationMessage";
import ErrorMessage from "./ErrorMessage";

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

export default function ChildCountrySub(props: CountrySubProps) {
  const { register, handleSubmit, errors, formState } = useForm();
  const [isOpen, setIsOpen] = useState(true);
  const loading = () => {
    setTimeout(function () {
      setIsOpen(false);
    }, 2000);
  };
  return (
    <form className="w-full max-w-sm shadow-md rounded">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-3/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="inline-full-name"
          >
            {props.title}
          </label>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="inline-full-name"
          >
            {props.countryLabel}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow h-auto appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border border-gray-300 focus:border-orange-500"
            id="email"
            type="email"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="inline-password"
          >
            {props.selectLabel}
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            onChange={props.handleFieldChange}
            className="h-auto divide-y divide-blue-300 block shadow appearance-none  border rounded w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border border-gray-300 focus:border-orange-500"
            id="grid-state"
            ref={register({ required: true })}
            name="selectValue"
          >
            <option value="" selected disabled hidden>
              Select a country
            </option>
            {props.countryList.map((selectValue) => {
              return (
                <option className="text-center py-2" value={selectValue}>
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
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="h-auto flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSubmit(props.onSubmit)}
          >
            Send<i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      {errors.email && (
        <ErrorMessage error="That email might be invalid or no country selected!" />
      )}
      {errors.selectedValue && (
        <ErrorMessage error="That country might be invalid or no country selected!" />
      )}
      {formState.isSubmitted && !errors.email && (
        <div>
          <Transition
            show={isOpen}
            enter="transition-opacity duration-105"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-350"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ConfirmationMessage confirmation="Email submitted!" />
            {loading()}
          </Transition>
        </div>
      )}
    </form>
  );
}
