import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "./image1.jpeg";

const testimonials = [
  {
    name: "Dhairya Kothari",
    text: "I have seen New India Assurance is far better once they give you a policy. Their claim—either IP or OPD—and reimbursement are far better.",
    img: Image,
  },
  {
    name: "Nityanand Koli",
    text: "I am a financial advisor working with many insurance companies, but believe me, this is the only company that never makes excuses when a claim arises. In my 16 years of experience, I can confidently say it is the only truly ethical company in India.",
    img: Image,
  },
  {
    name: "Adarsh A",
    text: "Never expected such transparency and amazing service from a Govt agency. Truly India is changing. Hats off!",
    img: Image,
  },
  {
    name: "Rajkumar R",
    text: "Good experience. Was happy to get my renewal.",
    img: Image,
  },
  {
    name: "Praisy Abraham",
    text: "Execellent website, glad to see Government portals getting designed so excellently.",
    img: Image,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, role, text, img } = testimonials[index];

  return (
    <div className={styles.testimonialContainer}>
      <h2 className={styles.testimonialHeading}>TESTIMONIALS</h2>

      <div key={index} className={`${styles.testimonialCard} ${styles.slideIn}`}>
        <div className={styles.testimonialProfile}>
          <img src={img} alt="profile" className={styles.profileImg} />
          <div className={styles.profileInfo}>
            <h3 className={styles.profileName}>{name}</h3>
            <p className={styles.profileRole}>{role}</p>
          </div>
        </div>
        <p className={styles.testimonialText}>"{text}"</p>
      </div>
    </div>
  );
};

export default Testimonial;
