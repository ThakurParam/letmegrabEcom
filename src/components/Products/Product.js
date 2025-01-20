import React, { useEffect } from "react";
import Layout from "../../common/Layout";
import Banner from "./Banner";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <Layout>
        <Banner /> <DataTable />
      </Layout>
    </>
  );
}
