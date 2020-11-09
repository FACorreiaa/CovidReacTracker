import React from "react";

export default function CardContainer() {
  return (
    <div className="box-border bg-white-landing h-full bg-landing-main bg-no-repeat bg-bottom p-landing-50 bg-landing-secondary bg-dark-landing flex justify-evenly">
      <section className="flex w-nav h-container justify-between p-container">
        <section className="w-card box-border p-card h-350 rounded-card text-card shadow-card first:bg-light-card first:text-white last:bg-dark-card last:text-white">
          <h1>Organized</h1>
          <p>
            Tickets are all organized and categorized based on your preferences.
            View and manage tickets at any time with our rich dashboard.
          </p>
        </section>
        <section className="w-card box-border p-card h-350 rounded-card text-card shadow-card first:bg-light-card first:text-white last:bg-dark-card last:text-white">
          <h1>Simple</h1>
          <p>
            Very easy to setup. Takes only a few seconds to get your bot ready
            and started.
          </p>
        </section>
        <section className="w-card box-border p-card h-350 rounded-card text-card shadow-card first:bg-light-card first:text-white last:bg-dark-card last:text-white">
          <h1>Support</h1>
          <p>
            Get support from our Developers. Join the Discord to receive status
            updates, technical help, and more!
          </p>
        </section>
      </section>
    </div>
  );
}
