import React from "react";
import "fontsource-poppins";

type Props = {
  title: string;
  value: string;
  icon?: string;
  imgSrc?: string;
  altsrc?: string;
  hashtag?: string;
};
export default function CustomLandingCard(props: Props) {
  return (
    <>
      <div className="font-poppins h-350 max-w-sm rounded text-card overflow-hidden shadow-card first:bg-light-card first:text-white last:bg-dark-card last:text-white">
        <img className="w-full" src={props.imgSrc} alt={props.altsrc} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.value}</p>
        </div>
      </div>
    </>
  );
}
