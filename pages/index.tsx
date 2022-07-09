import type { NextPage } from "next";
import Card from "../src/components/card";
import Layout from "../src/components/Layout";
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
            <Card>w</Card>
          </div>
        </div>

        {/* Recent Permits */}
        <div className="w-1/3 self-start">
          <Card>Recent</Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
