import portfolioData from "../data/portfolio";
import Scene from "../3d/Scene";
import Reveal from "../components/Reveal";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <Reveal>

          <p className="hero-label">
            {portfolioData.role}
          </p>

          <h1>
            I'm{" "}
            <span>
              {portfolioData.name}
            </span>
          </h1>

          <p className="hero-description">
            {portfolioData.tagline}
          </p>

          <button
            className="hero-button"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth"
                });
            }}
          >
            Explore My Work
          </button>

        </Reveal>

      </div>

      <div className="hero-3d">
        <Scene />
      </div>

      <div className="scroll-indicator">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>

      </div>

    </section>
  );
}

export default Hero;