import React, { useState } from "react";
import type { NextPage } from "next";
import Card from "../src/components/card";
import Layout from "../src/components/Layout";
import CountCard from "../src/components/StaticComponents/CountCard";
import dynamic from "next/dynamic";
import Search from "../src/components/Search";
import Button from "../src/components/button";

const AllPermitTable = dynamic(() => import("../src/tables/AllPermitTable"), {
  ssr: false,
});

const PermitCreator = dynamic(
  () => import("../src/components/StaticComponents/PermitCreator"),
  {
    ssr: false,
  }
);

const data = [
  {
    licensePlate: "SKO1234",
    name: "Collins Ogbuzuru",
    country: "Germany",
    startDate: "Novermber 1st 2022",
    endDate: "December 2nd 2021",
  },

  {
    licensePlate: "CKO1234",
    name: "Justin Ogbuzuru",
    country: "Switzerland,",
    startDate: "Novermber 1st 2022",
    endDate: "December 2nd 2021",
  },

  {
    licensePlate: "WKO1234",
    name: "Gift Ogbonana",
    country: "Austria",
    startDate: "Novermber 1st 2022",
    endDate: "December 2nd 2021",
  },

  {
    licensePlate: "PKO1234",
    name: "Patrick Igwe",
    country: "France",
    startDate: "Novermber 1st 2022",
    endDate: "December 2nd 2021",
  },
];

const Permit: NextPage = () => {
  const [filterText, setFilterText] = useState("");
  const [openDrawer, setOpenDrawwer] = useState(false);
  const handleToggle = () => {
    setOpenDrawwer((prev) => !prev);
  };

  const filteredItems = data.filter(
    (item) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.licensePlate &&
        item.licensePlate.toLowerCase().includes(filterText.toLowerCase()))
  );
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
            <div className="flex w-4/6 space-x-5 justify-end">
              <Search
                className=" w-2/4"
                placeholder="search..."
                onChange={(e) =>
                  setFilterText((e.target as HTMLInputElement).value)
                }
              />

              <Button onClick={() => setOpenDrawwer(true)} type="primary">
                Create Permit
              </Button>
            </div>
          </div>

          <AllPermitTable data={filteredItems} />
        </Card>
      </div>

      <PermitCreator
        open={openDrawer}
        onClose={setOpenDrawwer}
        onHandleClick={handleToggle}
      />
    </Layout>
  );
};

export default Permit;
