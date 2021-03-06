import React from "react";
import CustomAuthorMessage from "../ErrorMessages/AuthorMessage";
import FormButton from "./FormButton";

type Props = {
  children: any;
  onClick: any;
};

export default function CustomFormTemplate(props: Props) {
  return (
    <div className="w-full max-w-xs">
      <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 border-gray-300 border">
        <div className="md:flex md:items-center mb-6">{props.children}</div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <FormButton type="button" value="Submit" onClick={props.onClick} />
          </div>
        </div>
      </form>

      <CustomAuthorMessage />
    </div>
  );
}
