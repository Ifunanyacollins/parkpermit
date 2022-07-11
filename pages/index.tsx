import RecentPermit from "../src/components/StaticComponents/RecentPermit";
import type { NextPage } from "next";
import Card from "../src/components/card";
import icons from "../src/components/Icons";
import Layout from "../src/components/Layout";
import ActionCard from "../src/components/StaticComponents/ActionCard";
import CountCard from "../src/components/StaticComponents/CountCard";
import InFlowChart from "../src/components/StaticComponents/InFlowChart";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex space-x-5">
        {/* Overview and stats */}
        <div className="flex-1 space-y-5 ">
          {/* Yearly, Monthly and Daily Count */}
          <div className="grid grid-cols-3 gap-3">
            <CountCard title="Park Permit this year" count={1000000} />
            <CountCard title="Park Permit this Month" count={40000} />
            <CountCard title="Park Permit today" count={2000} />
          </div>
          {/* Permit flow chart */}
          <div>
            <Card>
              <InFlowChart />
            </Card>
          </div>

          {/* Extras */}
          <div className="grid grid-cols-2 gap-3">
            <ActionCard />
            <Card>
              <span className="font-semibold text-sm">Permit Due today</span>

              <div className="flex flex-col items-center py-10">
                <span>{icons["empty"]}</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Permits */}
        <div className="w-1/3 self-start">
          <Card>
            <span className="font-semibold text-sm">Wallet</span>
            <CountCard title="Total Revenue" count={1000000} />

            <hr />
            <div className="py-1">
              <span className="font-semibold text-sm">Recent Permit</span>
              <div className="space-y-3 my-3">
                <RecentPermit name="Collins Ogbuzuru" date="Nov 22 2022" />
                <RecentPermit name="Kia Jane" date="Dec 22 2022" />
                <RecentPermit name="Kane Madin" date="July 21 2022" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
