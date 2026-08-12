import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    // Close mobile menu after selecting a section
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "contact"
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(
            visibleSection.target.id
          );
        }
      },
      {
        threshold: 0.35
      }
    );

    sections.forEach((id) => {
      const section =
        document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="navbar">

      {/* LOGO */}

      <button
        className="navbar-logo"
        onClick={() =>
          scrollToSection("home")
        }
        aria-label="Go to home"
      >
        S
      </button>


      {/* DESKTOP NAVIGATION */}

      <div className="navbar-links">

        <button
          className={
            activeSection === "home"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("home")
          }
        >
          Home
        </button>

        <button
          className={
            activeSection === "about"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("about")
          }
        >
          About
        </button>

        <button
          className={
            activeSection === "projects"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("projects")
          }
        >
          Projects
        </button>

        <button
          className={
            activeSection === "skills"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("skills")
          }
        >
          Skills
        </button>

        <button
          className={
            activeSection === "experience"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("experience")
          }
        >
          Experience
        </button>

        <button
          className={
            activeSection === "contact"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("contact")
          }
        >
          Contact
        </button>

      </div>


      {/* MOBILE MENU BUTTON */}

      <button
        className="mobile-menu-button"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      {/* MOBILE NAVIGATION */}

      <div
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        <button
          className={
            activeSection === "home"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("home")
          }
        >
          Home
        </button>

        <button
          className={
            activeSection === "about"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("about")
          }
        >
          About
        </button>

        <button
          className={
            activeSection === "projects"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("projects")
          }
        >
          Projects
        </button>

        <button
          className={
            activeSection === "skills"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("skills")
          }
        >
          Skills
        </button>

        <button
          className={
            activeSection === "experience"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("experience")
          }
        >
          Experience
        </button>

        <button
          className={
            activeSection === "contact"
              ? "active"
              : ""
          }
          onClick={() =>
            scrollToSection("contact")
          }
        >
          Contact
        </button>

      </div>

    </nav>
  );
}

export default Navbar;