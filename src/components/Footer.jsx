import portfolioData from "../data/portfolio";

function Footer() {
  const { name, contact } = portfolioData;

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <div className="footer-logo">
            S
          </div>

          <div>
            <h3>
              {name}
            </h3>

            <p>
              Software Engineer
            </p>
          </div>

        </div>


        <div className="footer-links">

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${contact.email}`}
          >
            Email ↗
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} {name}.
          All rights reserved.
        </p>

        <p>
          Built with React &amp; creativity.
        </p>

      </div>

    </footer>
  );
}

export default Footer;