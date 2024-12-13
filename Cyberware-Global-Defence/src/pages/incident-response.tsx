// pages/index.tsx
import { useEffect } from 'react'; 
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextPage } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';


const IncidenceResponse: NextPage = () => {
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
                <h1 className="display-4 primary-color"><span className='fw-bold'>Incident</span> Response</h1>
              </div>
              <p className="fs-6 fw-bold text-white w-50 sb-2 px-3">
                "In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly."
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
                Key Features of <span className="primary-color fw-bold ">Incident Response</span>
              </h2>
              <img className='text-center img-width-50 mb-5' src="/assets/section detail card/bookmark.svg" alt="book with lock icon" />
            </div>
            <div className="row justify-content-center gx-4 gy-4 mb-5">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Reduce Response Time</h5>
                    <p className="text-center mt-2">
                      A clear plan enables quicker identification and remediation of threats, minimizing potential damage
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Enhance Coordination</h5>
                    <p className="text-center mt-2">
                      Clearly defined roles and responsibilities facilitate teamwork during high-stress situations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Ensure Compliance</h5>
                    <p className="text-center mt-2">
                      Many regulations require documented incident response procedures, helping organizations avoid legal repercussions
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Improve Security Posture</h5>
                    <p className="text-center mt-2">
                      Post-incident analysis allows organizations to learn from incidents and strengthen defenses against future threats 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Overview of Incident Response</h4>
                <p className='w-75 text-white'>Incident response refers to the structured approach organizations use to prepare for, detect, manage, and recover from cybersecurity incidents. A well-defined incident response plan (IRP) is crucial for minimizing damage and ensuring a swift recovery.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Best Practices for Effective Incident Response</h4>
                <p className='w-75 text-white'>Develop a Comprehensive IRP: Ensure your IRP includes detailed procedures for various types of incidents, communication plans, and escalation paths for different threat levels
                Implement Continuous Monitoring: Utilize tools like SIEM (Security Information and Event Management) to monitor for suspicious activities 24/7
                Conduct Regular Training: Regularly educate employees about potential threats and proper reporting procedures to foster a culture of security awareness within the organization</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Phases of Incident Response</h4>
                <p className='w-75 text-white'>The incident response process typically involves several key phases:
                Preparation: Organizations should conduct risk assessments, define security policies, and establish an incident response team with clearly defined roles. This phase may also include employee training to promote security awareness
                Detection and Analysis: Continuous monitoring of systems helps in the early detection of anomalies. Once detected, incidents must be prioritized based on their potential impact. Analyzing the nature and scope of the threat is crucial for an effective response strategy
                Containment: Immediate actions are taken to limit the spread of the incident. This may involve isolating affected systems or disabling compromised accounts</p>
              </div>
              
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Conclusion</h4>
                <p className='w-75 text-white'>A robust incident response strategy is essential for any organization aiming to protect its assets from cyber threats. By preparing adequately, responding effectively, and learning from past incidents, organizations can significantly enhance their resilience against future attacks. Implementing best practices in incident response not only mitigates risks but also fosters a proactive security culture within the organization.</p>
              </div>
            </div>
         </div> 
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IncidenceResponse;