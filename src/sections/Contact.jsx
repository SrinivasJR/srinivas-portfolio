import { useState } from "react";
import portfolioData from "../data/portfolio";
import Reveal from "../components/Reveal";
import resume from "../assets/resume.pdf";

function Contact() {
    const { contact } = portfolioData;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setStatus("Sending...");

        try {
            const response = await fetch(
                "https://srinivas-portfolio-api.onrender.com/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {

                setStatus(
                    "Message sent successfully! 🚀"
                );

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

            } else {

                setStatus(
                    data.message ||
                    "Unable to send message."
                );
            }

        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            setStatus(
                "Unable to connect to the server. Please try again."
            );

        } finally {

            setIsSubmitting(false);

        }
    };

    return (
        <section id="contact">

            <Reveal>

                <p className="section-label">
                    08 / CONTACT
                </p>

                <h2>
                    Let's build something great.
                </h2>

                <p className="contact-description">
                    Have an idea, opportunity, or project in mind?
                    I'd love to hear about it.
                </p>

            </Reveal>


            <Reveal className="contact-actions">

                <a
                    className="contact-primary"
                    href={`mailto:${contact.email}`}
                >
                    Email Me ↗
                </a>


                <a
                    className="contact-secondary"
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn ↗
                </a>

            </Reveal>


            {/* ================================
                CONTACT FORM
            ================================= */}

            <Reveal className="contact-form">

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }
                        required
                        disabled={isSubmitting}
                    />


                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }
                        required
                        disabled={isSubmitting}
                    />


                    <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value
                            })
                        }
                        required
                        disabled={isSubmitting}
                    />


                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Sending..."
                            : "Send Message ↗"}
                    </button>


                    {status && (
                        <p className="contact-status">
                            {status}
                        </p>
                    )}

                </form>

            </Reveal>


            <Reveal className="contact-links">

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
                    className="resume-link"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    download
                >
                    Download Resume ↓
                </a>

            </Reveal>

        </section>
    );
}

export default Contact;