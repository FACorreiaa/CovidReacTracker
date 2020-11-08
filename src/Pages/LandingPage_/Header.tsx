import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardContainer from "./CardContainer";

export default function Header() {
  return (
    <nav className="w-3/4 flex text-xl nav-text bg-gray-600 justify-between m-auto p-6 items-center shadow-2xl">
      <ul className="list-none">
        <li className="inline">Title 1</li>
        <li className="inline">Title 2</li>
        <li className="inline">Title 3</li>
      </ul>
    </nav>
  );
}
