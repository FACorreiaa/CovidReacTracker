import React from "react";

export default function CustomWarningMessage() {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-yellow-100 bg-yellow-700 border border-yellow-700 ">
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
          className="feather feather-info w-5 h-5 mx-2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>
      <div className="text-xl font-normal  max-w-full flex-initial">
        Insert data to get your results!
      </div>
      <div className="flex flex-auto flex-row-reverse">
        <div>
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
            className="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-5 h-5 ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

//border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700
