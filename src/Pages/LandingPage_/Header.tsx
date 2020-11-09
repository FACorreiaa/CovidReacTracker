import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardContainer from "./CardContainer";

export default function Header() {
  return (
    <nav className="w-nav flex text-nav text-nav-color justify-between m-nav p-nav-25 items-center shadow-nav rounded-nav">
      <ul className="list-none">
        <li className="inline p-nav-25">Title 1</li>
        <li className="inline p-nav-25">Title 2</li>
        <li className="inline p-nav-25">Title 3</li>
      </ul>
      <section>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-twitter"></i>
      </section>
    </nav>
  );
}
