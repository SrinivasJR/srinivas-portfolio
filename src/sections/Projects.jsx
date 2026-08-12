import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

function Projects() {
  return (
    <section id="projects" className="section projects">

      <Reveal>
        <p className="section-label">
          02 / PROJECTS
        </p>

        <h2>Selected Work</h2>
      </Reveal>

      <div className="projects-grid">

        {portfolioData.projects.map((project, index) => (

          <Reveal
            key={project.title}
            className={`project-reveal project-delay-${index}`}
          >

            <TiltCard>

              <article className="project-card">

                <div className="project-top">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-year">
                    {project.year}
                  </span>

                </div>

                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="technology-list">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </article>

            </TiltCard>

          </Reveal>

        ))}

      </div>

    </section>
  );
}

export default Projects;