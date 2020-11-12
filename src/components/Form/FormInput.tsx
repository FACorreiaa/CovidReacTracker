import React from "react";

type InputProps = {
  onChange: any;
  name: string;
  ref: any;
  id: string;
  type: string;
  placeholder: string;
};

export default function FormInput(props: InputProps) {
  return (
    <div>
      <input
        name={props.name}
        onChange={props.onChange}
        ref={props.ref}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
    </div>
  );
}
