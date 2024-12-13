// pages/index.tsx
import { useEffect } from 'react'; 
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextPage } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';


const SecurityAwarenessTraining: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-color");

    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []); 

  return (
    <>
      <Head>
        <title>Security Awareness Training</title>
        <meta name="description" content="Security Awareness Training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="container-fluid">
          <div className="row">
            <div className="s-hero-banner d-flex flex-column justify-content-center align-items-center">
              <div className="text-center text-white py-5">
                <h1 className="display-4 primary-color"><span className='fw-bold'>Security</span> Awareness Training</h1>
              </div>
              <p className="fs-6 fw-bold text-white w-50 sb-2 px-3">
                "Empower your employees to recognize and respond to potential cyber threats. Our comprehensive security awareness programs equip your workforce with the knowledge they need to prevent attacks."
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
              <img className='text-center img-width-50 mb-5' src="/assets/section detail card/mashine.svg" alt="maschine icon" />
            </div>
            <div className="row justify-content-center gx-4 gy-4 mb-5">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Customized Content</h5>
                    <p className="text-center mt-2">
                      Tailor training materials to different roles within the organization to ensure relevance and engagement 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Regular Training Sessions</h5>
                    <p className="text-center mt-2">
                      Conduct training sessions every four to six months, as retention of knowledge tends to decline after this period
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Diverse Learning Methods</h5>
                    <p className="text-center mt-2">
                      Utilize various formats such as videos, quizzes, and simulations to cater to different learning styles and keep content engaging
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card rounded-0 p-4 bb-3-primary">
                  <div className="card-body">
                    <h5 className="text-center primary-color mb-4">Phishing Simulations</h5>
                    <p className="text-center mt-2">
                      Regularly test employees with simulated phishing attacks to reinforce learning and gauge awareness levels
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Security Awareness Training: Importance and Best Practices</h4>
                <p className='w-75 text-white'>Security awareness training is a strategic initiative aimed at educating employees about cybersecurity risks and best practices. By enhancing awareness, organizations can significantly reduce the likelihood of security breaches caused by human error.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Objectives of Security Awareness Training</h4>
                <p className='w-75 text-white'>Educate Employees: Teach staff about the importance of cybersecurity and their role in protecting organizational assets.
                Reduce Human Error: Equip employees with the knowledge to recognize and respond to potential threats, thus minimizing incidents caused by negligence.
                Cultivate a Cybersecurity Mindset: Foster a culture of security where employees feel responsible for safeguarding sensitive information.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Best Practices for Implementation</h4>
                <p className='w-75 text-white'>Onboarding Training: Integrate security awareness training into the onboarding process for new employees to establish a security-first culture from the start.
                Continuous Learning: Provide ongoing education through newsletters, updates on emerging threats, and refresher courses throughout the year.
                Positive Reinforcement: Use humor and engaging content rather than fear-based tactics to improve retention and participation in training programs.
                Measure Effectiveness: Implement metrics to assess the impact of training, such as tracking phishing susceptibility rates before and after training sessions</p>
              </div>
              
              <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <h4 className='primary-color fw-bold mb-3'>Conclusion</h4>
                <p className='w-75 text-white'>Security awareness training is essential for building a resilient organizational culture against cyber threats. By educating employees on best practices and fostering a proactive approach to cybersecurity, organizations can significantly mitigate risks associated with human error. Regularly updated training programs that engage employees will help maintain high levels of awareness and readiness against evolving cyber threats.</p>
              </div>
            </div>
         </div> 
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SecurityAwarenessTraining;