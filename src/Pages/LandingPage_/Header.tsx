import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import CardContainer from "./CardContainer";

export default function Header() {
  let history = useHistory();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/${event.target.value}`);
  };
  return (
    <nav className="w-nav flex text-nav text-nav-color justify-between m-nav p-nav-25 items-center shadow-nav rounded-nav">
      <ul className="list-none">
        <li className="inline p-nav-25">
          <Link to="/summary">Summary</Link>
        </li>
        <li className="inline p-nav-25">
          <Link to="/dayone">Day One</Link>
        </li>
        <li className="inline p-nav-25 w-4">
          <select
            onChange={onChange}
            name="live"
            id="live"
            className="w-40 bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          >
            <option className="bg-transparent" value="live/total">
              Live Total
            </option>
            <option className="bg-transparent" value="live/after/date">
              Live After Date
            </option>
            <option className="bg-transparent" value="live/daily/country">
              Live Daily Country
            </option>
          </select>
        </li>
        <li className="inline p-nav-25">
          <select
            onChange={onChange}
            name="top"
            id="top"
            className="bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          >
            <option className="bg-transparent" value="rank/daily">
              Current top 10
            </option>
            <option className="bg-transparent" value="rank/total">
              Global top 10
            </option>
          </select>
        </li>
        <li className="inline p-nav-25 ">
          <select
            onChange={onChange}
            name="country"
            id="country"
            className="w-64 bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          >
            <option className="bg-transparent" value="country/total">
              Country total
            </option>
            <option className="bg-transparent" value="country/cases/dates">
              Country total cases between dates
            </option>
            <option className="bg-transparent" value="country/status">
              Country by status
            </option>
            <option className="bg-transparent" value="country/status/dates">
              Country by status between dates
            </option>
          </select>
        </li>
        <li className="inline p-nav-25">
          <Link to="/subscribe">Subscribe</Link>
        </li>
        <li className="inline p-nav-25">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}