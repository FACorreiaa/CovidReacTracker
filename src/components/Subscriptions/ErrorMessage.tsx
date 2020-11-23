import React from "react";

type Props = {
  error: string;
};
export default function ErrorMessages(props: Props) {
  return (
    <div>
      <div role="alert">
        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">
          <div slot="avatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-alert-octagon w-5 h-5 mx-2"
            >
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="text-xl font-normal  max-w-full flex-initial">
            {props.error}
          </div>
          <div className="flex flex-auto flex-row-reverse">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
