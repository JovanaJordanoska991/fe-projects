// pages/index.tsx
import { useEffect } from 'react'; 
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextPage } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';


const PenertationTesting: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-color");

    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []); 

  return (
    <>
      <Head>
        <title>Penetration testing</title>
        <meta name="description" content="Penetration Testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="container-fluid">
          <div className="row">
            <div className="s-hero-banner d-flex flex-column justify-content-center align-items-center">
              <div className="text-center text-white py-5">
                <h1 className="display-4 primary-color"><span className='fw-bold'>Penetration</span> Testing</h1>
              </div>
              <p className="fs-6 fw-bold text-white w-50 sb-2 px-3">
                "Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services."
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
                Key Features of <span className="primary-color fw-bold ">Penetration Testing</span>
              </h2>
              <img className='text-center img-width-50 mb-5' src="/assets/section detail card/target.svg" alt="shield icon" />
            </div>
            <div className="row justify-content-center gx-4 gy-4 mb-5">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Reconnaissance</h5>
                    <p className="text-center mt-2">
                      Gathering information about the target system, which may include identifying network services and potential entry points
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Scanning</h5>
                    <p className="text-center mt-2">
                      Using tools to discover live hosts, open ports, and services running on those ports. This phase helps in mapping the attack surface
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Gaining Access</h5>
                    <p className="text-center mt-2">
                      Exploiting identified vulnerabilities using various tools and techniques to gain unauthorized access to the system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Maintaining Access</h5>
                    <p className="text-center mt-2">
                      Establishing a persistent presence within the target environment to gather further data and assess the extent of control that can be achieved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Overview of Penetration Testing</h4>
                <p className='w-75 text-white'>Penetration testing, often referred to as "pentesting," is an authorized simulated cyberattack on a computer system, designed to evaluate its security. Unlike vulnerability assessments, which merely identify potential weaknesses, penetration tests actively exploit vulnerabilities to demonstrate their impact and assess the overall security posture of the system.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Purpose and Importance</h4>
                <p className='w-75 text-white'>The primary goal of penetration testing is to identify and address security vulnerabilities before they can be exploited by malicious actors. By simulating real-world attacks, organizations can understand their weaknesses and implement necessary defenses. Regular penetration testing is crucial for maintaining robust cybersecurity measures, especially in light of increasing cyber threats.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Best Practices for Effective SIEM Implementation</h4>
                <p className='w-75 text-white'>Different types of penetration tests focus on various aspects of an organization's security:</p>
                <p className='w-75 text-white'> 1. Web Application Testing: Evaluates web applications for vulnerabilities such as SQL injection and cross-site scripting (XSS).</p>
                <p className='w-75 text-white'> 2. Internal Network Testing: Assesses vulnerabilities from within the network, simulating an insider threat.</p>
                <p className='w-75 text-white'> 3. External Network Testing: Identifies vulnerabilities that could be exploited from outside the organization.</p>
                <p className='w-75 text-white'> 4. Social Engineering Testing: Tests employees' susceptibility to phishing and other social engineering tactics.</p>
                <p className='w-75 text-white'> 5. Wireless Network Testing: Examines the security of wireless networks against unauthorized access.</p>
                
              </div>
              
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Conclusion</h4>
                <p className='w-75 text-white'>Penetration testing is an essential component of a comprehensive cybersecurity strategy. By simulating attacks and identifying vulnerabilities, organizations can take proactive measures to strengthen their defenses against real-world threats. Regularly scheduled penetration tests not only enhance security but also ensure compliance with industry regulations, ultimately protecting sensitive data and maintaining trust with stakeholders.</p>
              </div>
            </div>
         </div> 
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PenertationTesting;