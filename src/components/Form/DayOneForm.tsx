import React from "react";
import CustomFormButton from "../Button/CustomFormButton";
import { Controller, useForm } from "react-hook-form";
import CustomErrorMessage from "../../components/ErrorMessages/ErrorMessage";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
type Props = {
  onClick: any;
  label: string;
  name: string;
  for: string;
  onChange: any;
  id: string;
  type: string;
  placeholder: string;
  myRef?: any;
};

export default function CustomDayOneTemplate(props: Props) {
  const { register, handleSubmit, watch, errors, control } = useForm();

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
            <Controller
              rules={{ required: true }}
              control={control}
              name="country"
              render={() => (
                <FormInput
                  className={
                    errors.country
                      ? `shadow appearance-none focus:bg-white  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`
                      : `border-red-500 text-red-500 italic shadow appearance-none focus:bg-white  border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none`
                  }
                  myRef={props.myRef}
                  onChange={props.onChange}
                  name="country"
                  id="country"
                  placeholder={`${
                    errors.country ? "Insert a valid country" : "Country"
                  }`}
                  type="text"
                  ref={register({
                    required: "Required",
                  })}
                />
              )}
            />
            {errors.country && (
              <CustomErrorMessage error="Insert a valid country" />
            )}
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
