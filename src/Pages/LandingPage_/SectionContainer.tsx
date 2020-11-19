import React, { FunctionComponent } from "react";
import phone from "../../assets/images/phone.svg"; // Import using relative path
import "fontsource-roboto";

type SectionProps = {};

export const SectionContainer: FunctionComponent<SectionProps> = ({
  children,
}) => (
  <div>
    <section className="font-roboto flex w-nav m-nav p-nav-25 justify-between space-section">
      <aside className="flex flex-col justify-center"></aside>
      {children}
      <img src={process.env.PUBLIC_URL + phone} alt="phone" width="400px" />
    </section>
  </div>
);
