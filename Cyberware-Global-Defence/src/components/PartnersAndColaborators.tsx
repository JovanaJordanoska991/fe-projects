import React from "react";

const PartnersAndColaborators = () => {
    return (
              <main className="container-fluid">
        <div className="container">
          <section className="text-center my-5">
            <h1 className="fw-bold text-white">
              Meet Our <span className="primary-color">Partners</span> & <span className="primary-color">Collaborations</span>
            </h1>
            <p className="fw-bolder text-white w-75 mx-auto">
              At Cyberware Global Defense, we are proud to collaborate with the following industry leaders and organizations to provide the best cybersecurity solutions to our clients.
            </p>
          </section>
          <section className="row">
            <div className="col-12 bg-white p-4 mb-5">
              <div className="partners-grid justify-content-center mb-4">
                <div className="partner-item">
                  <img
                    className="img-fluid"
                    src="/assets/colaborators/brainster1.png"
                    alt="Collaboration with Brainster, people working on a laptop"
                  />
                </div>
                <div className="partner-item">
                  <img
                    className="img-fluid"
                    src="/assets/colaborators/brainster2.png"
                    alt="Collaboration with Brainster, people in an office"
                  />
                </div>
              </div>
              <div className="ms-3">
                <h3 className="fw-bold mb-3">
                  Partnership with <span className="primary-color">Brainster</span>
                </h3>
                <p className="text-muted">
                  Our partnership with Brainster enables us to recruit and train the next generation of cybersecurity professionals. Together, we bring fresh ideas and cutting-edge solutions to the forefront of cyber defense. By combining Brainster’s forward-thinking education programs with our industry expertise, we are building a stronger, more resilient cybersecurity workforce. This collaboration ensures that our team stays ahead of emerging threats, equipped with the skills and knowledge to protect businesses and individuals in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="col-12 bg-card p-4 mb-5">
              <div className="partners-grid justify-content-center mb-4">
                <div className="partner-item">
                  <img
                    className="img-fluid"
                    src="/assets/colaborators/microsoft.png"
                    alt="Open laptop"
                  />
                </div>
                <div className="ms-3 d-flex flex-column justify-content-center">
                <h3 className="fw-bold mb-3 text-white display-6">
                  Partnership with <span className="primary-color">Microsoft</span>
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.
                </p>
              </div>
              </div>
            </div>
            <div className="col-12 bg-card p-4 mb-5">
              <div className="partners-grid justify-content-center mb-4">
                <div className="ms-3 d-flex flex-column justify-content-center">
                <h3 className="fw-bold mb-3 text-white display-6">
                  Partnership with <span className="primary-color">Salesforce IQ</span>
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.
                </p>
              </div>
                <div className="partner-item">
                  <img
                    className="img-fluid"
                    src="/assets/colaborators/salesfocus-iq.png"
                    alt="People having a meeting"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 bg-white p-4 mb-5">
              <div className="partners-grid justify-content-center mb-4">
                <div className="partner-item">
                  <img
                    className="img-fluid"
                    src="/assets/colaborators/azure1.png"
                    alt="Collaboration with Brainster, people working on a laptop"
                  />
                </div>
                <div className="partner-item">
                  <img
                    className="img-fluid"
                    src="/assets/colaborators/azure2.png"
                    alt="Collaboration with Brainster, people in an office"
                  />
                </div>
              </div>
              <div className="ms-3">
                <h3 className="fw-bold mb-3">
                  Partnership with <span className="primary-color">Azure</span>
                </h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
              <a href="#" className="t-btn-p primary-color fs-5 text-center w-25">View all partners</a>
            </div>
          </section>
        </div>
      </main>
    );
};

export default PartnersAndColaborators;