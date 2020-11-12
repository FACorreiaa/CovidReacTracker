import React from "react";
import { useForm } from "react-hook-form";
import CustomFormButton from "../Button/CustomFormButton";
import CustomReactTailWindDatePicker from "../DatePicker/CustomReactTailWindDatePicker";
import CustomErrorMessage from "../ErrorMessages/ErrorMessage";
import CustomInputCountryForm from "./CustomInput";

type Props = {
  onClick: any;
  onDateChange: any;
  inputValue: any;
  onChange: any;
  value: string;
};

export default function CustomAfterDateFormTemplate(props: Props) {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className="w-full max-w-xs">
      <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:flex md:items-center mb-6">
          <CustomReactTailWindDatePicker
            label="Date"
            for="after"
            onChange={props.onDateChange}
            selected={props.inputValue}
          />
          <CustomInputCountryForm
            for="country"
            id="country"
            type="text"
            placeholder="Country"
            onChange={props.onChange}
            label="Country"
            myRef={props.value}
          />
          {errors.country && (
            <CustomErrorMessage error="Insert a valid country" />
          )}
          {/**
           * className={
              errors.country
                ? `border-red-500 text-red-500 text-xs italic`
                : "shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            }
           */}
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <CustomFormButton
              label="Submit"
              onClick={handleSubmit(props.onClick)}
            />
            <button type="button" onClick={handleSubmit(props.onClick)}>
              Submit
            </button>
          </div>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
