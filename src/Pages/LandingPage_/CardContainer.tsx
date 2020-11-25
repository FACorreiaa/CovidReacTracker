import React from "react";
import CustomLandingCard from "../../components/Landing/CustomLandingCard";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import nation from "../../assets/images/Nations.jpg";
import stats from "../../assets/images/Stats.jpg";
import subs from "../../assets/images/Subscriptions.jpg";
export default function CardContainer() {
  return (
    <>
      <CustomSecondaryContainer>
        <section className="blog text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <article className="prose prose-sm lg:prose-sm">
                <h1>Covid React Tracker</h1>
                <p>
                  Checkout the latest news and statistics about Covid19 and
                  subscribe for daily alerts for numbers and statistics around
                  you!
                </p>
              </article>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <CustomLandingCard
                title="Data"
                subtitle="Check Data around the world"
                value="Pick between general data around the world or by a specific country over time"
                imgSrc={nation}
                altsrc="nation"
                link="/country/total"
                linkValue="Country Data"
              />

              <CustomLandingCard
                title="Alerts"
                subtitle="Subscribe for data"
                value="Subscribe to receive daily emails with information about cases around the world or by a specific country"
                imgSrc={subs}
                altsrc="nation"
                link="/subscribe"
                linkValue="Subscriptions"
              />
              <CustomLandingCard
                title="Statistics"
                subtitle="Check your data over time"
                value="Visualize your data in graphs over time or simple card information!"
                imgSrc={stats}
                altsrc="nation"
                link="/statistics/country/info"
                linkValue="Statistics"
              />
            </div>
          </div>
        </section>
      </CustomSecondaryContainer>
    </>
  );
}
