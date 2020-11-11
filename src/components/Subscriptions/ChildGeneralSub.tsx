import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

type GeneralSubProps = {
  value: string;
  onChange: any;
  placeholder: string;
  onSubmit: any;
  label: string;
};
export default function GeneralSubForm(props: GeneralSubProps) {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <>
      <form className="w-full max-w-sm shadow-md rounded">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          {props.label}
        </label>

        <div className="flex error items-center border-b ">
          <input
            type="email"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            aria-label="email"
            name="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />

          <button
            onClick={handleSubmit(props.onSubmit)}
            className="flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Send<i className="fas fa-paper-plane"></i>
          </button>
        </div>
        {errors.email && (
          <ErrorMessage
            title="Danger!"
            error="That email might be invalid or you are already subbed"
          />
        )}
      </form>
    </>
  );
}
