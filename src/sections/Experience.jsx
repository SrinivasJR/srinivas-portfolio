import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";

function Experience() {
  return (
    <section
      id="experience"
      className="section experience"
    >

      <Reveal>

        <p className="section-label">
          04 / EXPERIENCE
        </p>

        <h2>
          Where I've Worked
        </h2>

        <p className="experience-intro">
          My professional journey, projects and
          experiences that shaped the way I build.
        </p>

      </Reveal>


      <div className="experience-timeline">

        <div className="timeline-line"></div>


        {portfolioData.experience.map(
          (item, index) => (

            <Reveal
              key={`${item.company}-${item.year}`}
              className={`timeline-item timeline-delay-${index}`}
            >

              <div className="timeline-dot"></div>


              <div className="timeline-content">

                <div className="timeline-meta">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <span className="timeline-company">
                    {item.company}
                  </span>

                </div>


                <h3>
                  {item.role}
                </h3>


                <p>
                  {item.description}
                </p>

              </div>

            </Reveal>

          )
        )}

      </div>

    </section>
  );
}

export default Experience;