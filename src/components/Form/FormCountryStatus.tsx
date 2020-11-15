import React from "react";
import FormButton from "./FormButton";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Subscriptions/ErrorMessage";
import CustomMultipleStatusSelect from "./CustomMultipleSelect";
import CustomCountryMultipleSelect from "./CustomCountryMultipleSelect";

type FormCountryStatusProps = {
  onClick: any;
  onChange: any;
  myRef: any;
  handleFieldChange: any;
  for: string;
  id: string;
  type: string;

  handlCountryFieldChange: any;
  countryList: [];
  selectValue: string;
};
export default function CustomFormCountryStatus(props: FormCountryStatusProps) {
  const { handleSubmit, errors } = useForm();

  return (
    <div>
      <form className="w-full max-w-sm shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4">
              Select Status
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
              Country
            </label>
          </div>
          <div className="md:w-2/3">
            <CustomCountryMultipleSelect
              handleFieldChange={props.handlCountryFieldChange}
              selectValue={props.selectValue}
              countryList={props.countryList}
            />
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
        {errors.country && <ErrorMessage error="Invalid country selected!" />}
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
