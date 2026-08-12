import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";

function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      number: "01",
      skills: portfolioData.skills.frontend
    },
    {
      title: "BACKEND",
      number: "02",
      skills: portfolioData.skills.backend
    },
    {
      title: "TOOLS & DATABASE",
      number: "03",
      skills: portfolioData.skills.tools
    }
  ];

  return (
    <section
      id="skills"
      className="section skills"
    >

      <Reveal>

        <p className="section-label">
          03 / SKILLS
        </p>

        <h2>
          Technical Arsenal
        </h2>

        <p className="skills-intro">
          Technologies and tools I use to
          design, build and ship digital
          experiences.
        </p>

      </Reveal>


      <div className="skills-categories">

        {skillCategories.map(
          (category, categoryIndex) => (

            <Reveal
              key={category.title}
              className={`skill-category-reveal skill-category-delay-${categoryIndex}`}
            >

              <div className="skill-category">

                <div className="skill-category-top">

                  <span className="skill-number">
                    {category.number}
                  </span>

                  <span className="skill-category-title">
                    {category.title}
                  </span>

                </div>


                <div className="skill-items">

                  {category.skills.map(
                    (skill) => (

                      <div
                        className="skill-item"
                        key={skill}
                      >

                        <span>
                          {skill}
                        </span>

                        <span className="skill-arrow">
                          ↗
                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            </Reveal>

          )
        )}

      </div>

    </section>
  );
}

export default Skills;