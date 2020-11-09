import React, { FunctionComponent } from "react";
import phone from "../../assets/images/phone.svg"; // Import using relative path

type SectionProps = {};

export const SectionContainer: FunctionComponent<SectionProps> = ({
  children,
}) => (
  <div>
    <section className="flex w-nav m-nav p-nav-25 justify-between space-section">
      <aside className="flex flex-col justify-center"></aside>
      {children}
      <img src={process.env.PUBLIC_URL + phone} alt="phone" width="400px" />
      {console.log("PROCESS", process.env.PUBLIC_URL)}
    </section>
  </div>
);
