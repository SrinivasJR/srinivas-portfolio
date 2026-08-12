import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";

function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications"
    >

      <Reveal>

        <p className="section-label">
          06 / CERTIFICATIONS
        </p>

        <h2>
          Continuous Learning
        </h2>

        <p className="certifications-intro">
          Certifications and learning milestones
          that continue to expand my technical skills.
        </p>

      </Reveal>


      <div className="certifications-grid">

        {portfolioData.certifications.map(
          (certificate, index) => (

            <Reveal
              key={certificate.title}
              className={`certificate-reveal certificate-delay-${index}`}
            >

              <article className="certificate-card">

                <div className="certificate-top">

                  <span className="certificate-number">
                    0{index + 1}
                  </span>

                  <span className="certificate-year">
                    {certificate.year}
                  </span>

                </div>


                <div className="certificate-icon">
                  ✦
                </div>


                <h3>
                  {certificate.title}
                </h3>


                <p>
                  {certificate.issuer}
                </p>


                <div className="certificate-line"></div>

              </article>

            </Reveal>

          )
        )}

      </div>

    </section>
  );
}

export default Certifications;