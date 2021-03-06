import React from "react";

type InputProps = {
  onChange: any;
  name: string;
  ref: any;
  id: string;
  type: string;
  placeholder: string;
  myRef?: any;
  className: string;
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
        className={props.className}
      />
    </div>
  );
}
