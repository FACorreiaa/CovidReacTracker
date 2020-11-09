import React from "react";
import phone from "../../assets/images/phone.svg"; // Import using relative path

export default function SectionInfo() {
  return (
    <section className="flex w-nav m-nav p-nav-25 justify-between space-section">
      <aside className="flex flex-col justify-center">
        <h1 className="text-contentTitle text-nav-color font-content">
          Hello, World!
        </h1>
        <button className="text-nav-color text-nav p-button w-button text-center shadow-button rounded-button">
          Learn More
        </button>
      </aside>
      <img src={process.env.PUBLIC_URL + phone} alt="phone" width="400px" />
      {console.log("PROCESS", process.env.PUBLIC_URL)}
    </section>
  );
}
