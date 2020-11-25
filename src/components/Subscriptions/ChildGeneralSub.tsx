import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ConfirmationMessage from "./ConfirmationMessage";
import ErrorMessage from "./ErrorMessage";
import { Transition } from "@headlessui/react";

type GeneralSubProps = {
  value: string;
  onChange: any;
  placeholder: string;
  onSubmit: any;
  label: string;
};

export default function GeneralSubForm(props: GeneralSubProps) {
  const { register, handleSubmit, errors, formState } = useForm();
  const [isOpen, setIsOpen] = useState(true);
  const loading = () => {
    setTimeout(function () {
      setIsOpen(false);
    }, 2000);
  };
  return (
    <>
      <form className="w-full max-w-sm shadow-md rounded sm:grid border-gray-300 border">
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
            className="h-auto appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            aria-label="email"
            name="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            disabled={formState.isSubmitting}
          />

          <button
            onClick={handleSubmit(props.onSubmit)}
            className="hover:border-none focus:shadow-nav focus:outline-none hover:bg-gray-500 h-auto flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Send<i className="fas fa-paper-plane"></i>
          </button>
        </div>
        {errors.email && (
          <ErrorMessage error="That email might be invalid or you are already subbed" />
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
    </>
  );
}
