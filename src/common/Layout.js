import React from "react";
import Header from "../assets/Header";
import Section from "./Section";
import Footer from "../assets/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </>
  );
}
