import React from "react";
import "fontsource-roboto";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "../../constants/links";

//h-footer
export default function Footer() {
  return (
    <footer className="bg-footer-main justify-center font-roboto">
      <section className="w-footer flex justify-between m-footer text-footer-color">
        <section>
          <h1 className="text-footer-title font-bold  text-footer-color">
            Keep updated with daily email alerts and the latest information
            about Covid19
          </h1>
          <ul className="list-none font-semibold italic">
            <Link to="/contact">
              <li>Contact me!</li>
            </Link>
            <Link to="/subscribe">
              <li>Subscribe</li>
            </Link>
          </ul>
        </section>
        <section className="m-footer w-footer text-right">
          <div className="text-footer-color m-1 text-footer-icons mr-footer">
            <a target="_blank" href={GITHUB_URL} rel="noopener noreferrer">
              <i className="fab fa-github pr-2" />
            </a>

            <a target="_blank" href={LINKEDIN_URL} rel="noopener noreferrer">
              <i className="fab fa-linkedin pr-2" />
            </a>

            <a target="_blank" href={TWITTER_URL} rel="noopener noreferrer">
              <i className="fab fa-twitter pr-2" />
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}
