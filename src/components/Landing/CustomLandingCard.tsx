import React from "react";
import "fontsource-poppins";

type Props = {
  title: string;
  subtitle: string;
  value: string;
  icon?: string;
  imgSrc?: string;
  altsrc?: string;
  hashtag?: string;
};
export default function CustomLandingCard(props: Props) {
  return (
    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
      <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
        <img src={props.imgSrc} alt={props.altsrc} />
      </div>

      <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        <div className="header-content inline-flex ">
          <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-gray-100">
            <div className="h-2 w-2 rounded-full m-1 bg-orange-500 "></div>
          </div>
          <div className="category-title flex-1 text-sm">{props.title}</div>
        </div>
        <div className="title-post font-medium">{props.subtitle}</div>

        <div className="summary-post text-base text-justify">
          {props.value}
          <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
            <span className="">Lire plus</span>
          </button>
        </div>
      </div>
    </div>
  );
}
