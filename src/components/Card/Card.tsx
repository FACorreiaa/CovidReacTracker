import React from "react";

type Props = {
  title: string;
  value: number;
  icon: string;
};
export default function CustomCard(props: Props) {
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <i className={props.icon}></i>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {props.title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {props.value}
          </p>
        </div>
      </div>
    </>
  );
}
