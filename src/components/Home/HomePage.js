import React from "react";
import Layout from "../../common/Layout";
import Caraousel from "./Caraousel";
import ShopNow from "./ShopNow";
import DataGrid from "./DataGrid";
import FAQ from "./FAQ";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Caraousel />
        <ShopNow />
        <DataGrid />
        <FAQ />
      </Layout>
    </>
  );
}
