// pages/index.tsx
import { useEffect } from 'react'; 
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextPage } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';


const NetworkSecurity: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-color");

    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []); 

  return (
    <>
      <Head>
        <title>Incident response</title>
        <meta name="description" content="Indicent Response" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="container-fluid">
          <div className="row">
            <div className="s-hero-banner d-flex flex-column justify-content-center align-items-center">
              <div className="text-center text-white py-5">
                <h1 className="display-4 primary-color"><span className='fw-bold'>Network</span> Security</h1>
              </div>
              <p className="fs-6 fw-bold text-white w-50 sb-2 px-3">
                "We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access."
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
                Key Features of <span className="primary-color fw-bold ">Network Security</span>
              </h2>
              <img className='text-center img-width-50 mb-5' src="/assets/section detail card/network.svg" alt="network icon" />
            </div>
            <div className="row justify-content-center gx-4 gy-4 mb-5">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Perform Regular Audits</h5>
                    <p className="text-center mt-2">
                      Conduct thorough network audits to identify vulnerabilities and assess the overall security posture. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Implement Data Loss Prevention (DLP)</h5>
                    <p className="text-center mt-2">
                      DLP strategies help monitor and control data transfers across the network to prevent unauthorized access or data breaches
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Educate Employees</h5>
                    <p className="text-center mt-2">
                      Regular training on security awareness helps employees recognize phishing attempts and social engineering tactics, reducing the risk of human error
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Improve Routers</h5>
                    <p className="text-center mt-2">
                      Change default passwords on routers, relocate them to secure areas, and implement additional security measures such as video surveillance to prevent unauthorized access
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Network Security: Best Practices and Strategies</h4>
                <p className='w-75 text-white'>Network security encompasses a range of measures designed to protect the integrity, confidentiality, and availability of computer networks and data. As cyber threats evolve, organizations must adopt robust strategies to safeguard their networks against unauthorized access, misuse, or damage.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Key Components of Network Security</h4>
                <p className='w-75 text-white'>Physical Security: Protects physical assets such as servers, routers, and switches from unauthorized access. This includes using locks, surveillance cameras, and controlled access to facilities.
                Technical Security: Involves the use of hardware and software technologies to protect data in transit and at rest. This includes firewalls, intrusion detection systems (IDS), and encryption protocols.
                Administrative Security: Focuses on policies and procedures that govern user behavior and access controls. This includes user authentication processes and compliance with security policies.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Best Practices for Network Security</h4>
                <p className='w-75 text-white'>Secure Routers: Change default passwords on routers, relocate them to secure areas, and implement additional security measures such as video surveillance to prevent unauthorized access.
                Use SIEM Solutions: Aggregate network data in a Security Information and Event Management (SIEM) system to analyze real-time alerts and historical data for potential threats.
                Establish Access Controls: Implement strict access management policies to regulate who can access sensitive information based on their roles within the organization.
                Network Segmentation: Divide the network into segments based on trust levels to contain potential breaches and limit the spread of threats across the network.</p>
              </div>
              
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Conclusion</h4>
                <p className='w-75 text-white'>Implementing these best practices is essential for maintaining a secure network environment. Organizations must remain vigilant against emerging threats by continuously updating their security measures, educating employees, and leveraging advanced technologies like SIEM systems. By fostering a culture of security awareness and proactive defense, organizations can significantly reduce their risk exposure in an increasingly complex cyber landscape.</p>
              </div>
            </div>
         </div> 
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NetworkSecurity;