import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="h-64 bg-gray-600 justify-center justify-between">
        <section className="w-3/4 flex justify-between m-auto">
          <section>
            <h1 className="text-4xl font-light ">Additional Information</h1>
            <ul className="list-none text-gray-300">
              <li>About Hello, World!</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </section>
        </section>
        <section className="m-auto w-3/4">
          <div className="text-gray-300 m-1 text-3xl">Some Icons</div>
        </section>
      </footer>
    </div>
  );
}
