import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHeroBanner from "@/components/AboutHeroBanner";
import OurLocations from "@/components/OurLocations";
import OurPartnersAbout from "@/components/OurPartnersAbout";
import SecurityAwarenessAdvisors from "@/components/SecurityAwarenessAdvisors";
import CybersecuritySpecialists from "@/components/CybersecuritySpecialists";
import OurSertifications from "@/components/OurSertifications";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutHeroBanner />
      <OurLocations />
      <OurPartnersAbout />
      <CybersecuritySpecialists />
      <SecurityAwarenessAdvisors /> 
      <OurSertifications />
      <Footer />
    </>
  );
};

export default AboutPage;


