import { CssBaseline, Container, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type SectionProps = {
  item: string;
  icon: string;
};

// we can use children even though we haven't defined them in our CardProps
export const CustomHeader: FunctionComponent<SectionProps> = ({
  item,
  icon,
}) => (
  <nav className="w-nav flex text-nav text-nav-color justify-between m-nav p-nav-25 items-center shadow-nav rounded-nav">
    <ul className="list-none">
      <li className="inline p-nav-25">
        <Link to="/summary">Summary</Link>
      </li>
      <select>
        Teste
        <option>1</option>
        <option>1</option>
      </select>
    </ul>
    <section>
      <span>Covid</span>
      <span>Tracke</span>
      <span>React</span>
      <i className={icon}></i>
    </section>
  </nav>
);
