import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";

function About() {
  return (
    <section id="about" className="section about">
      <Reveal>
        <p className="section-label">01 / ABOUT</p>

        <h2>About Me</h2>

        <p className="about-text">
          {portfolioData.about}
        </p>
      </Reveal>
    </section>
  );
}

export default About;