import React from "react";

type Props = {
  title: string;
  children: any;
};

//
export default function SectionInfo(props: Props) {
  return (
    <div>
      <h1 className="text-contentTitle text-nav-color font-content tiny:text-lg">
        {props.title}
      </h1>
      {props.children}
    </div>
  );
}
