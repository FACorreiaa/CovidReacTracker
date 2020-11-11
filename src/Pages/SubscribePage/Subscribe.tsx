import React from "react";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CountrySub from "../../components/Subscriptions/CountrySub";
import GeneralSub from "../../components/Subscriptions/GeneralSub";

export default function SubscribePage() {
  return (
    <div>
      <CustomSecondaryContainer>
        <div className="prose lg:prose-xl">
          Subscribe to get emails daily about Corona Virus around the world
          <p>By subscribing you will get daily reports about:</p>
          <ul className="list-inside">
            <li>New Cases</li>
            <li>New Deaths</li>
            <li>New Recovered</li>
            <li>Total Cases</li>
            <li>Total Deaths</li>
            <li>Total Recovered</li>
          </ul>
          <p>
            You will get one email each 12h about general cases around the world
            and for specific countries that you choose to apply for! You can
            ubsubscribe anytime, dont worry
          </p>
          <p className="text-center ">
            And remember,
            <span className="font-semibold tracking-widest">
              everything will be alright!
            </span>
            <i className="fas fa-rainbow"></i>
          </p>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-1 col-span-2 ">
            <CountrySub />
          </div>
          <div className="row-span-2 col-span-2 ">
            <GeneralSub />
          </div>
        </div>
      </CustomSecondaryContainer>
    </div>
  );
}
