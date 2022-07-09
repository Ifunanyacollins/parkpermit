import type { NextPage } from "next";
import Card from "../src/components/card";
import Layout from "../src/components/Layout";
import CountCard from "../src/components/StaticComponents/CountCard";
import AllPermitTable from "../src/tables/AllPermitTable";

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
          <div className="mb-10 mt-5">
            <p className="text-lg font-bold ">All Park Permit</p>
          </div>

          <AllPermitTable />
        </Card>
      </div>
    </Layout>
  );
};

export default Permit;
