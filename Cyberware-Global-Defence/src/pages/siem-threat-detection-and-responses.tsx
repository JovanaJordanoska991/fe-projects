// pages/index.tsx
import { useEffect } from 'react'; 
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextPage } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';


const SiemThreatDetection: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-color");

    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []); 

  return (
    <>
      <Head>
        <title>SIEM Threat Detection</title>
        <meta name="description" content="SIEM Threat Detection & Response" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="container-fluid">
          <div className="row">
            <div className="s-hero-banner d-flex flex-column justify-content-center align-items-center">
              <div className="text-center text-white py-5">
                <h1 className="display-4">
                  <span className="primary-color fw-bold">SIEM</span> Threat Detection & Response
                </h1>
              </div>
              <p className="fs-6 fw-bold text-white w-50 sb-2 px-3">
                "Protecting the digital future through innovative cybersecurity solutions, we empower businesses to safeguard their assets, ensure compliance, and maintain trust in an increasingly connected world."
              </p>
              <a href="#" className="btn custom-btn">Get a Demo</a>
            </div>
          </div>
        </section>
        <Breadcrumbs />
        <section>
          <div className="container my-5">
            <div className="d-flex align-items-center align-content-center flex-column">
                <h2 className='text-center fw-bold text-white mb-4'>
                Key Features of <span className="primary-color fw-bold ">SIEM</span>
              </h2>
              <img className='text-center img-width-50 mb-5' src="/assets/section detail card/shield.svg" alt="shield icon" />
            </div>
            <div className="row justify-content-center gx-4 gy-4 mb-5">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Data Aggregation</h5>
                    <p className="text-center mt-2">
                      SIEM solutions collect event data from diverse sources, including user activities, endpoints, applications, and security hardware like firewalls and antivirus software.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Event Correlation</h5>
                    <p className="text-center mt-2">
                      By correlating related events, SIEM systems can identify patterns that may indicate potential threats.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Real-Time Monitoring</h5>
                    <p className="text-center mt-2">
                      SIEM tools provide near-real-time analysis of security alerts, enabling security teams to respond swiftly to incidents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Automated Response</h5>
                    <p className="text-center mt-2">
                      Many SIEM solutions incorporate automation features that can respond to certain types of threats automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Overview of SIEM in Threat Detection and Response</h4>
                <p className='w-75 text-white'>Security Information and Event Management (SIEM) systems play a crucial role in modern cybersecurity strategies by aggregating and analyzing log data from various sources within an organization's IT infrastructure. These systems are designed to detect, investigate, and respond to security threats in real-time, enhancing overall security posture.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Threat Detection and Response (TDR)</h4>
                <p className='w-75 text-white'>Threat Detection and Response encompasses a broader strategy that includes not only SIEM but also other technologies such as Endpoint Detection and Response (EDR) and Threat Intelligence Platforms (TIPs). The TDR process typically involves:</p>
                <p className='w-75 text-white'>Proactive Threat Hunting: Actively searching for potential threats before they can cause damage, which requires a deep understanding of normal network behavior</p>
                <p className='w-75 text-white'>Incident Response: Implementing structured steps to address detected threats, including identification, containment, eradication, recovery, and post-incident analysis.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Best Practices for Effective SIEM Implementation</h4>
                <p className='w-75 text-white'>Continuous Monitoring: Organizations should implement ongoing monitoring of their networks and systems to detect threats early</p>
                <p className='w-75 text-white'>Multi-Layered Security Approach: Combining SIEM with other security measures such as EDR and TIPs creates a more robust defense against cyber attacks</p>
                <p className='w-75 text-white'>Incident Response: Implementing structured steps to address detected threats, including identification, containment, eradication, recovery, and post-incident analysis.</p>
                <p className='w-75 text-white'>Incident Response Planning: Developing a detailed incident response plan ensures that organizations can react efficiently to security incidents when they occur</p>
                <p className='w-75 text-white'>Leverage Automation: Utilizing automated tools enhances the speed and effectiveness of both threat detection and response efforts</p>
              </div>
              
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Conclusion</h4>
                <p className='w-75 text-white'>SIEM solutions are integral to effective threat detection and response strategies in cybersecurity. By leveraging advanced analytics, real-time monitoring, and automation capabilities, organizations can significantly improve their ability to detect and respond to cyber threats swiftly and efficiently. Implementing best practices in conjunction with SIEM technologies further strengthens an organization's overall security framework against increasingly sophisticated cyber threats.</p>
              </div>
            </div>
         </div> 
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SiemThreatDetection;

