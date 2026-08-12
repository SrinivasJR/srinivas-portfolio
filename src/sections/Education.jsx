import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";

function Education() {
  return (
    <section
      id="education"
      className="section education"
    >

      <Reveal>

        <p className="section-label">
          05 / EDUCATION
        </p>

        <h2>
          Academic Journey
        </h2>

        <p className="education-intro">
          The academic foundation behind my
          technical journey.
        </p>

      </Reveal>


      <div className="education-list">

        {portfolioData.education.map(
          (item, index) => (

            <Reveal
              key={`${item.institution}-${item.year}`}
              className={`education-reveal education-delay-${index}`}
            >

              <article className="education-card">

                <div className="education-year">
                  {item.year}
                </div>

                <div className="education-content">

                  <p className="education-degree">
                    {item.degree}
                  </p>

                  <h3>
                    {item.institution}
                  </h3>

                  <p className="education-description">
                    {item.description}
                  </p>

                </div>

                <div className="education-arrow">
                  ↗
                </div>

              </article>

            </Reveal>

          )
        )}

      </div>

    </section>
  );
}

export default Education;