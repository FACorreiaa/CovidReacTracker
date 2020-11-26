import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import PT from "../../assets/images/portugal.svg";
import EN from "../../assets/images/england.svg";

export default function Header() {
  let history = useHistory();
  const { t, i18n } = useTranslation("landing");
  const [hidden, setHidden] = useState(true);
  const onOpen = () => {
    setHidden(false);
  };
  const onClose = () => {
    setHidden(true);
  };
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/${event.target.value}`);
  };
  return (
    <>
      <nav className="tiny:hidden w-nav flex text-nav text-nav-color justify-between m-nav p-nav-25 items-center  shadow-nav rounded-nav tiny:w-full md:justify-start md:space-x-10">
        <div>
          <Link to="/">
            <img
              className="h-24 w-auto focus:outline-none"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </Link>
        </div>
        <ul className="list-none">
          <li className="inline p-nav-25">
            <Link to="/summary">{t("summaryTitle")}</Link>
          </li>
          <li className="inline p-nav-25">
            <Link to="/dayone">{t("dayOneTitle")}</Link>
          </li>
          <li className="inline p-nav-25 w-4">
            <select
              onChange={onChange}
              name="live"
              id="live"
              className="w-40  bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
            >
              <option
                value=""
                defaultValue="Live Total"
                selected
                disabled
                hidden
              >
                {t("live.title")}
              </option>
              <option className="bg-transparent text-black" value="live/total">
                {t("live.totalTitle")}
              </option>
              {/**
             * <option className="bg-transparent" value="live/after/date">
              {t("live.totalAfter")}
            </option>
             */}
              <option
                className="bg-transparent text-black"
                value="live/daily/country"
              >
                {t("live.totalCountry")}
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
              <option
                value=""
                defaultValue="Statistics"
                selected
                disabled
                hidden
              >
                {t("statistics.title")}
              </option>
              <option
                className="bg-transparent text-black"
                value="statistics/country/info"
              >
                {t("statistics.info")}
              </option>
              <option
                className="bg-transparent text-black"
                value="statistics/country/data/new"
              >
                {t("statistics.new")}
              </option>
              <option
                className="bg-transparent text-black"
                value="statistics/country/data/total"
              >
                {t("statistics.total")}
              </option>
            </select>
          </li>
          <li className="inline p-nav-25 ">
            <select
              onChange={onChange}
              name="country"
              id="country"
              className="w-64 bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled hidden>
                {t("country.title")}
              </option>
              <option
                className="bg-transparent text-black"
                value="country/total"
              >
                {t("country.total")}
              </option>
              <option
                className="bg-transparent text-black"
                value="country/cases/dates"
              >
                {t("country.casesBetween")}
              </option>
              <option
                className="bg-transparent text-black"
                value="country/status"
              >
                {t("country.status")}
              </option>
              <option
                className="bg-transparent text-black"
                value="country/status/dates"
              >
                {t("country.statusBetween")}
              </option>
            </select>
          </li>
          <li className="inline p-nav-25 ">
            <select
              onChange={onChange}
              name="hospital"
              id="hospital"
              className="w-64 bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled hidden>
                {t("hospital.title")}
              </option>
              <option className="bg-transparent text-black" value="occupancy">
                {t("hospital.occupancy")}
              </option>
              <option
                className="bg-transparent text-black"
                value="occupancy/million"
              >
                {t("hospital.occupancyMillion")}
              </option>
              <option className="bg-transparent text-black" value="admissions">
                {t("hospital.admissions")}
              </option>
              <option
                className="bg-transparent text-black"
                value="admissions/million"
              >
                {t("hospital.admissionsMillion")}
              </option>
            </select>
          </li>
          <li className="inline p-nav-25 ">
            <select
              onChange={onChange}
              name="summary"
              id="summary"
              className="w-64 bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled hidden>
                {t("countrySummary.title")}
              </option>
              <option
                className="bg-transparent text-black"
                value="summary/new/recovered"
              >
                {t("countrySummary.newRecovered")}
              </option>
              <option
                className="bg-transparent text-black"
                value="summary/new/confirmed"
              >
                {t("countrySummary.newConfirmed")}
              </option>
              <option
                className="bg-transparent text-black"
                value="summary/new/deaths"
              >
                {t("countrySummary.newDeaths")}
              </option>
              <option
                className="bg-transparent text-black"
                value="summary/total/recovered"
              >
                {t("countrySummary.totalRecovered")}
              </option>
              <option
                className="bg-transparent text-black"
                value="summary/totalconfirmed"
              >
                {t("countrySummary.totalConfirmed")}
              </option>
              <option
                className="bg-transparent text-black"
                value="summary/total/deaths"
              >
                {t("countrySummary.totalDeaths")}
              </option>
            </select>
          </li>
          <li className="inline p-nav-25">
            <Link to="/subscribe"> {t("subscribe")}</Link>
          </li>

          <div className="inline p-nav-25">
            <button
              className="logo focus:outline-none"
              onClick={() => changeLanguage("pt")}
            >
              <img src={PT} width="25" height="10" alt="pt" />
            </button>
            <button
              className="logo focus:outline-none"
              onClick={() => changeLanguage("en")}
            >
              <img src={EN} width="25" height="10" alt="en" />
            </button>
          </div>
        </ul>
      </nav>

      <nav className="sm:hidden w-nav  text-nav text-nav-color  m-nav p-nav-25 text-left  shadow-nav rounded-nav">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="-mr-2">
              <button
                onClick={onOpen}
                type="button"
                className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/**
           * Close Button
           *  <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
           */}
            </div>
          </div>
        </div>
        {/*meter tudo ali dentro */}

        <div
          className={`${
            hidden ? "hidden" : ""
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-landing-main divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link to="/">
                  <img
                    className="h-8 w-auto focus:outline-none"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </Link>
                <div className="-mr-2">
                  <button
                    onClick={onClose}
                    type="button"
                    className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <ul className="list-none py-4">
                  <li className="flex-row py-2">
                    <Link to="/summary">{t("summaryTitle")}</Link>
                  </li>
                  <li className="flex-row py-2">
                    <Link to="/dayone">{t("dayOneTitle")}</Link>
                  </li>
                  <li className="flex-row py-2">
                    <select
                      onChange={onChange}
                      name="live"
                      id="live"
                      className="w-40 bg-transparent rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
                    >
                      <option
                        value=""
                        defaultValue="Live Total"
                        selected
                        disabled
                        hidden
                      >
                        {t("live.title")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="live/total"
                      >
                        {t("live.totalTitle")}
                      </option>
                      {/**
             * <option className="bg-transparent" value="live/after/date">
              {t("live.totalAfter")}
            </option>
             */}
                      <option
                        className="bg-transparent text-black"
                        value="live/daily/country"
                      >
                        {t("live.totalCountry")}
                      </option>
                    </select>
                  </li>
                  <li className="flex-row py-2">
                    <select
                      onChange={onChange}
                      name="top"
                      id="top"
                      className="bg-transparent rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
                    >
                      <option
                        value=""
                        defaultValue="Statistics"
                        selected
                        disabled
                        hidden
                      >
                        {t("statistics.title")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="statistics/country/info"
                      >
                        {t("statistics.info")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="statistics/country/data/new"
                      >
                        {t("statistics.new")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="statistics/country/data/total"
                      >
                        {t("statistics.total")}
                      </option>
                    </select>
                  </li>
                  <li className="flex-row py-2">
                    <select
                      onChange={onChange}
                      name="country"
                      id="country"
                      className="w-64 bg-transparent rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
                    >
                      <option
                        value=""
                        defaultValue="Country"
                        selected
                        disabled
                        hidden
                      >
                        {t("country.title")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="country/total"
                      >
                        {t("country.total")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="country/cases/dates"
                      >
                        {t("country.casesBetween")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="country/status"
                      >
                        {t("country.status")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="country/status/dates"
                      >
                        {t("country.statusBetween")}
                      </option>
                    </select>
                  </li>
                  <li className="flex-row py-2">
                    <select
                      onChange={onChange}
                      name="hospital"
                      id="hospital"
                      className="w-64 bg-transparent rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
                    >
                      <option
                        value=""
                        defaultValue="hospital"
                        selected
                        disabled
                        hidden
                      >
                        {t("hospital.title")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="occupancy"
                      >
                        {t("hospital.occupancy")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="occupancy/million"
                      >
                        {t("hospital.occupancyMillion")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="admissions"
                      >
                        {t("hospital.admissions")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="admissions/million"
                      >
                        {t("hospital.admissionsMillion")}
                      </option>
                    </select>
                  </li>
                  <li className="flex-row py-2">
                    <select
                      onChange={onChange}
                      name="summary"
                      id="summary"
                      className="w-64 bg-transparent rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
                    >
                      <option
                        value=""
                        defaultValue="hospital"
                        selected
                        disabled
                        hidden
                      >
                        {t("countrySummary.title")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="summary/new/recovered"
                      >
                        {t("countrySummary.newRecovered")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="summary/new/confirmed"
                      >
                        {t("countrySummary.newConfirmed")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="summary/new/deaths"
                      >
                        {t("countrySummary.newDeaths")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="summary/total/recovered"
                      >
                        {t("countrySummary.totalRecovered")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="summary/totalconfirmed"
                      >
                        {t("countrySummary.totalConfirmed")}
                      </option>
                      <option
                        className="bg-transparent text-black"
                        value="summary/total/deaths"
                      >
                        {t("countrySummary.totalDeaths")}
                      </option>
                    </select>
                  </li>
                  <li className="flex-row py-2">
                    <Link to="/subscribe"> {t("subscribe")}</Link>
                  </li>

                  <div className="flex-row py-2">
                    <button
                      className="logo focus:outline-none"
                      onClick={() => changeLanguage("pt")}
                    >
                      <img src={PT} width="25" height="10" alt="pt" />
                    </button>
                    <button
                      className="logo focus:outline-none"
                      onClick={() => changeLanguage("en")}
                    >
                      <img src={EN} width="25" height="10" alt="en" />
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
