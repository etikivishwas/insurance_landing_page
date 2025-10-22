// Footer.jsx
import React from "react";
import { FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.box}>
        <p className={styles.subtitle}>
          Your safety and security deserve some extra care
        </p>
        <h2 className={styles.title}>Give us a shout!</h2>

        <div className={styles.contact}>
          <p className={styles.contactTitle}>Contact Info</p>

          {/* Email */}
          <p className={styles.email}>
            Send an email to: <strong>a.raghava9@gmail.com</strong>
          </p>

          {/* Phone */}
          <p className={styles.phone}>
            <FaPhone size={18} /> <span>9989133366</span>
          </p>

          {/* Icons */}
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/company/newindassurance/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/newindassurance/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <p className={styles.footerNote}>
        © 2025 Milieu Globals. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
