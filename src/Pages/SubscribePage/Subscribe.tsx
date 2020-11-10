import React from "react";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CountrySub from "../../components/Subscriptions/CountrySub";
import GeneralSub from "../../components/Subscriptions/GeneralSub";

export default function SubscribePage() {
  return (
    <div>
      <CustomSecondaryContainer>
        <div>
          Subscribe to get emails daily about Corona Virus around the world
          <p>By subscribing you will get daily reports about:</p>
          <ol>
            <li>New Cases</li>
            <li>New Deaths</li>
            <li>New Recovered</li>
            <li>Total Cases</li>
            <li>Total Deaths</li>
            <li>Total Recovered</li>
          </ol>
          <p>
            You will get one email each 12h about general cases around the world
            and for specific countries that you choose to apply for!
          </p>
          <p>You can ubsubscribe anytime, dont worry</p>
          <p>And remember, everything will be alright!</p>
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
