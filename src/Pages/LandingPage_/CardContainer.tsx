import React from "react";

export default function CardContainer() {
  return (
    <div className="bg-black-landing black-landing box-border h-full bg-gray-600 bg-no-repeat pt-12 font-header bg-red-100 flex justify-evenly">
      <section className="flex w-3/4 h-64 p-20 justify-between">
        <section className="w-64 box-border p-8 h-64 rounded-3xl text-2xl p-6 shadow-card first:bg-white last:bg-gray-200 last:text-white">
          <h1>Organized</h1>
          <p>
            Tickets are all organized and categorized based on your preferences.
            View and manage tickets at any time with our rich dashboard.
          </p>
        </section>
        <section className="w-64 box-border p-8 h-64 rounded-3xl text-2xl p-6 shadow-card first:bg-white last:bg-gray-200 last:text-white">
          <h1>Simple</h1>
          <p>
            Very easy to setup. Takes only a few seconds to get your bot ready
            and started.
          </p>
        </section>
        <section className="w-64 box-border p-8 h-64 rounded-3xl text-2xl p-6 shadow-card first:bg-white last:bg-gray-200 last:text-white">
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
