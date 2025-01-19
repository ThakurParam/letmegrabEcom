import React from "react";
import Layout from "../../common/Layout";
import Caraousel from "./Caraousel";
import ShopNow from "./ShopNow";
import DataGrid from "./DataGrid";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Caraousel />
        <ShopNow />
        <DataGrid />
      </Layout>
    </>
  );
}
