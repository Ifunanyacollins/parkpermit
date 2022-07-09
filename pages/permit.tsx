import type { NextPage } from "next";
import Card from "../src/components/card";
import Layout from "../src/components/Layout";
import CountCard from "../src/components/StaticComponents/CountCard";

import dynamic from "next/dynamic";
import icons from "../src/components/Icons";
import Search from "../src/components/Search";

const AllPermitTable = dynamic(() => import("../src/tables/AllPermitTable"), {
  ssr: false,
});
const Permit: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-3">
        <CountCard title="Park Permit this year" count={1000000} />
        <CountCard title="Park Permit this Month" count={40000} />
        <CountCard title="Park Permit today" count={2000} />
      </div>

      <div className="my-10">
        <Card>
          <div className="mb-10 mt-5 flex justify-between">
            <p className="text-lg font-bold ">All Park Permit</p>

            <Search className=" w-1/4" />
          </div>

          <AllPermitTable />
        </Card>
      </div>
    </Layout>
  );
};

export default Permit;
