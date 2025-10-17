import React from "react";
import styles from "./styles.module.css";
import heroImage from "./heroImage.png";

const Hero = () => {
  // Scroll function
  const scrollToPolicies = () => {
    const section = document.getElementById("popular-policies");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} id="home">
      {/* Left Content */}
      <div className={styles.heroContent}>
        <h1>Your Trusted Insurance, Simplified</h1>
        <p>
          Compare & buy New India Assurance policies easily. Explore insurance
          solutions designed for your peace of mind. From health to travel and
          vehicle protection — we’ve got you covered.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get a Quote</button>
          {/* Scrolls to Popular Policies section */}
          <button className={styles.secondaryBtn} onClick={scrollToPolicies}>
            View Policies
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className={styles.heroImage}>
        <img
          src={heroImage}
          alt="Insurance Protection"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
