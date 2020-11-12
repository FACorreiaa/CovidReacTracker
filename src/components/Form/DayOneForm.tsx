import React from "react";
import CustomFormButton from "../Button/CustomFormButton";
import { useForm } from "react-hook-form";
import CustomErrorMessage from "../../components/ErrorMessages/ErrorMessage";
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
  const { register, handleSubmit, watch, errors } = useForm();

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
              name={props.name}
              onChange={props.onChange}
              className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              ref={register({
                required: "Required",
              })}
            ></input>
            {errors.country && (
              <CustomErrorMessage error="Insert a valid country" />
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              type="button"
              onClick={handleSubmit(props.onClick)}
              className="text-black items-center shadow-nav rounded-nav  bg-nav hover:bg-black-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4"
            >
              {props.label}
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
