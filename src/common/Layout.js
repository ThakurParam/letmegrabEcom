import React from "react";
import Header from "../assets/Header";
import Footer from "../assets/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
