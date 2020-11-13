import React from "react";
import CustomReactTailWindDatePicker from "../DatePicker/CustomReactTailWindDatePicker";
import FormButton from "./FormButton";
import { useForm } from "react-hook-form";
import ErrorMessages from "../Subscriptions/ErrorMessage";
import CustomMultipleStatusSelect from "./CustomMultipleSelect";
import CustomErrorMessage from "../ErrorMessages/ErrorMessage";

type LiveTotalProps = {
  onClick: any;
  onToChange: any;
  valueToDate: any;
  onFromChange: any;
  valueFromDate: any;
  onChange: any;
  myRef: any;
  for: string;
  handleFieldChange: any;
  id: string;
  type: string;
};

export default function CustomFormCountryStatusDates(props: LiveTotalProps) {
  const { handleSubmit, errors, register } = useForm();

  return (
    <div>
      <form className="w-full max-w-sm shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4">
              Status
            </label>
          </div>
          <div className="md:w-2/3">
            <CustomMultipleStatusSelect
              handleFieldChange={props.handleFieldChange}
              label=""
              for={props.for}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4">
              From
            </label>
          </div>
          <div className="md:w-2/3">
            <CustomReactTailWindDatePicker
              label=""
              for="after"
              onChange={props.onFromChange}
              selected={props.valueFromDate}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4">
              To
            </label>
          </div>
          <div className="md:w-2/3">
            <CustomReactTailWindDatePicker
              label=""
              for="after"
              onChange={props.onToChange}
              selected={props.valueToDate}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4">
              Country
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="country"
              onChange={props.onChange}
              className={`
              ${
                errors.country
                  ? "border-red-400 border text-red-500 italic shadow appearance-none focus:bg-white  w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                  : "shadow appearance-none focus:bg-white  border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              }
              `}
              id={props.id}
              type={props.type}
              placeholder={`${
                errors.country ? "Insert a valid country" : "Country"
              }`}
              ref={register({
                required: "Required",
              })}
            />
            <div className="text-center">
              {errors.country && (
                <CustomErrorMessage error="Insert a valid country" />
              )}
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <FormButton
              onClick={handleSubmit(props.onClick)}
              type="button"
              value="Submit"
            />
          </div>
        </div>
        {errors.country && (
          <ErrorMessages title="Danger!" error="Invalid country selected!" />
        )}
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
