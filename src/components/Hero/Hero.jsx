import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Lottie from "lottie-react";
import heroAnimation from "./Vehicle.json";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const words = ["Protection", "Assurance", "Peace"];

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1700);
    return () => clearTimeout(t);
  }, [index, words.length]);

  // Scroll to the "Popular Policies" section
  const scrollToPolicies = () => {
    const section = document.getElementById("popular-policies");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to the Contact form section
  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} id="home">
      {/* Left Content */}
      <div className={styles.heroContent}>
        <h1>
          Your Trusted Source for{" "}
          <span key={index} className={styles.rotatingWord}>
            {words[index]}
          </span>
        </h1>
        <p>
          Compare & buy New India Assurance policies easily. Explore insurance
          solutions designed for your peace of mind. From health to travel and
          vehicle protection — we’ve got you covered.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={scrollToContact}>
            Get a Quote
          </button>

          <button className={styles.secondaryBtn} onClick={scrollToPolicies}>
            View Policies
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className={styles.heroImage}>
        <Lottie
          animationData={heroAnimation}
          loop={true}
          autoplay={true}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
