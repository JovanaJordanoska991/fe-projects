import { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnersAndColaborators from "@/components/PartnersAndColaborators";

const PartnershipsPage: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-color");

    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Partnerships</title>
        <meta name="description" content="Explore our trusted partners and collaborations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PartnersAndColaborators />
      <Footer />
    </>
  );
};

export default PartnershipsPage;
