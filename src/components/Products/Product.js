import React from "react";
import Layout from "../../common/Layout";
import Banner from "./Banner";
import DataTable from "./DataTable";

export default function Product() {
  return (
    <>
      <Layout>
        <Banner /> <DataTable />
      </Layout>
    </>
  );
}
