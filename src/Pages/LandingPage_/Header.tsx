import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import PT from "../../assets/images/portugal.svg";
import EN from "../../assets/images/england.svg";

export default function Header() {
  let history = useHistory();
  const { t, i18n } = useTranslation("landing");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(`/${event.target.value}`);
  };
  return (
    <nav className="w-nav flex text-nav text-nav-color justify-between m-nav p-nav-25 items-center shadow-nav rounded-nav">
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
            className="w-40 bg-transparent inline p-nav-25 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          >
            <option value="" defaultValue="Live Total" selected disabled hidden>
              {t("live.title")}
            </option>
            <option className="bg-transparent" value="live/total">
              {t("live.totalTitle")}
            </option>
            {/**
             * <option className="bg-transparent" value="live/after/date">
              {t("live.totalAfter")}
            </option>
             */}
            <option className="bg-transparent" value="live/daily/country">
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
            <option value="" defaultValue="Statistics" selected disabled hidden>
              {t("statistics.title")}
            </option>
            <option className="bg-transparent" value="statistics/country/info">
              {t("statistics.info")}
            </option>
            <option
              className="bg-transparent"
              value="statistics/country/data/new"
            >
              {t("statistics.new")}
            </option>
            <option
              className="bg-transparent"
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
          >
            <option value="" defaultValue="Country" selected disabled hidden>
              {t("country.title")}
            </option>
            <option className="bg-transparent" value="country/total">
              {t("country.total")}
            </option>
            <option className="bg-transparent" value="country/cases/dates">
              {t("country.casesBetween")}
            </option>
            <option className="bg-transparent" value="country/status">
              {t("country.status")}
            </option>
            <option className="bg-transparent" value="country/status/dates">
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
          >
            <option value="" defaultValue="hospital" selected disabled hidden>
              {t("hospital.title")}
            </option>
            <option className="bg-transparent" value="occupancy">
              {t("hospital.occupancy")}
            </option>
            <option className="bg-transparent" value="occupancy/million">
              {t("hospital.occupancyMillion")}
            </option>
            <option className="bg-transparent" value="admissions">
              {t("hospital.admissions")}
            </option>
            <option className="bg-transparent" value="admissions/million">
              {t("hospital.admissionsMillion")}
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
  );
}
