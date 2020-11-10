import React from "react";

type Props = {
  country: string;
  value: number;
  index: number;
};

export default function CustomList(props: Props) {
  return (
    <div className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
      <div className="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg text-nav-color text-nav  text-center shadow-button">
        <div className="lg:flex md:flex items-center">
          <div className="flex flex-col">
            <div className="text-sm leading-3 text-gray-700 font-bold w-full">
              {props.index} - {props.country}
            </div>

            <div className="text-xs text-gray-600 w-full">{props.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
