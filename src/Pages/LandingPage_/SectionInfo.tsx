import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
  children: any;
};

export default function SectionInfo(props: Props) {
  return (
    <div>
      <h1 className="text-contentTitle text-nav-color font-content">
        {props.title}
      </h1>
      {props.children}
    </div>
  );
}
