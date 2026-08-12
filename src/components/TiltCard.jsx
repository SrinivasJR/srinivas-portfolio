import { useRef } from "react";

function TiltCard({ children, className = "" }) {
    const cardRef = useRef(null);

    const handleMouseMove = (event) => {
        const card = cardRef.current;

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        const glowX =
            (x / rect.width) * 100;

        const glowY =
            (y / rect.height) * 100;

        card.style.setProperty(
            "--rotate-x",
            `${rotateX}deg`
        );

        card.style.setProperty(
            "--rotate-y",
            `${rotateY}deg`
        );

        card.style.setProperty(
            "--glow-x",
            `${glowX}%`
        );

        card.style.setProperty(
            "--glow-y",
            `${glowY}%`
        );
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;

        if (!card) return;

        card.style.setProperty(
            "--rotate-x",
            "0deg"
        );

        card.style.setProperty(
            "--rotate-y",
            "0deg"
        );

        card.style.setProperty(
            "--glow-x",
            "50%"
        );

        card.style.setProperty(
            "--glow-y",
            "50%"
        );
    };

    return (
        <div
            ref={cardRef}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

export default TiltCard;