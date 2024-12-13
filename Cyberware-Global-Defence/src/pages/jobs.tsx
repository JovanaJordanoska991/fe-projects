import { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JoinOurTeam from "@/components/JoinOurTeam";

const JobsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <JoinOurTeam />
      <Footer />
    </>
  );
};

export default JobsPage;