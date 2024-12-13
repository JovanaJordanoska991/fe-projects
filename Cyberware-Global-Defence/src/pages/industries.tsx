import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallSubscribe from "@/components/SmallSubscribe";
import Services from "@/components/Services";
import IndustryBanner from "@/components/IndustryBanner";
import IndustryService from "@/components/IndustryService";

const PartnershipsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Industries</title>
        <meta name="description" content="Learn more about us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <IndustryBanner />
      <IndustryService />
      <SmallSubscribe />
      <Footer />
    </>
  );
};

export default PartnershipsPage;