import React from "react";

type InputProps = {
  onChange: any;
  name: string;
  ref: any;
  id: string;
  type: string;
  placeholder: string;
  myRef?: any;
};

export default function FormInput(props: InputProps) {
  return (
    <div>
      <input
        name={props.name}
        onChange={props.onChange}
        ref={props.myRef}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="shadow appearance-none focus:bg-white  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
    </div>
  );
}
