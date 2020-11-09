import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
  date: string;
  newConfirmed: string;
  newDeaths: string;
  newRecovered: string;
  totalConfirmed: string;
  totalDeaths: string;
  totalRecovered: string;
};

export default function SummaryPageList(props: Props) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {props.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          {props.date}
        </p>
      </div>
      <div>
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              New Confirmed
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {props.newConfirmed}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              New Deaths
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {props.newDeaths}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              New Recovered
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {props.newRecovered}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Total Confirmed
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {props.totalConfirmed}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Total Deaths
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {props.totalDeaths}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Total Recovered
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {props.totalRecovered}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
