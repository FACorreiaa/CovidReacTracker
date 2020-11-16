import React from "react";
import { useForm } from "react-hook-form";
import CustomCountryMultipleSelect from "./CustomCountryMultipleSelect";
import FormButton from "./FormButton";
import ErrorMessage from "../Subscriptions/ErrorMessage";
type Props = {
  onClick: any;
  label: string;
  for: string;
  onChange: any;
  id: string;
  type: string;
  placeholder: string;
  myRef?: any;
  handleFieldChange: any;
  countryList: [];
  selectValue: string;
};

export default function CustomDayOneTemplate(props: Props) {
  const { handleSubmit, errors, register } = useForm();

  return (
    <div className="w-full max-w-xs">
      <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={props.for}
            >
              {props.label}
            </label>
          </div>
          <div className="md:w-2/3">
            <CustomCountryMultipleSelect
              handleFieldChange={props.handleFieldChange}
              selectValue={props.selectValue}
              countryList={props.countryList}
              ref={register({ required: true })}
              name="selectValue"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <FormButton
              type="button"
              onClick={handleSubmit(props.onClick)}
              value="Submit"
            />
          </div>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
