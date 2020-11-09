import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="h-footer bg-footer-main justify-center">
      <section className="w-footer flex justify-between m-footer text-footer-color">
        <section>
          <h1 className="text-footer-title font-footer  text-footer-color">
            Additional Information
          </h1>
          <ul className="list-none">
            <li>About Hello, World!</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section className="m-footer w-footer">
          <div className="text-footer-color m-1 text-footer-icons mr-footer">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </section>
      </section>
    </footer>
  );
}
