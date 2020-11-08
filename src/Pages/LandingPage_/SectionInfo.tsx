import React from "react";
import phone from "../../assets/images/phone.svg"; // Import using relative path

export default function SectionInfo() {
  return (
    <section className="flex w-3/4 m-auto p-6 justify-between mt-12">
      <aside className="flex flex-col justify-center">
        <h1 className="text-4xl font-light text-gray-400">Hello, World!</h1>
        <div className="bg-gray-200 text-base p-4 w-40 text-center shadow-sm rounded-3xl">
          <span>Learn More</span>
        </div>
      </aside>
      <img src={process.env.PUBLIC_URL + phone} alt="phone" width="400px" />
      {console.log("PROCESS", process.env.PUBLIC_URL)}
    </section>
  );
}
