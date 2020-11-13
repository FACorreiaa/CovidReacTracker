import React from "react";
import { useForm } from "react-hook-form";
import CustomErrorMessage from "../../components/ErrorMessages/ErrorMessage";
import FormButton from "./FormButton";
type Props = {
  onClick: any;
  label: string;
  for: string;
  onChange: any;
  id: string;
  type: string;
  placeholder: string;
  myRef?: any;
};

export default function CustomDayOneTemplate(props: Props) {
  const { register, handleSubmit, errors } = useForm();

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
