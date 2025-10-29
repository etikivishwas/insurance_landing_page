import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "./img1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  const handleScrollToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact-section";
    }
    handleCloseMenu();
  };

  // 🧠 Detect scroll direction
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
    <nav
      className={`${styles.navbar} ${showNavbar ? styles.navbarVisible : styles.navbarHidden}`}
    >
      <div className={styles.logo}>
        <Link to="/" onClick={handleCloseMenu} className={styles.logoLink}>
          <img
            src={Image}
            alt="New India Assurance Logo"
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>The New India Assurance Co. Ltd</span>
            <hr className={styles.line} />
            <span className={styles.logoSubtitle}>
              दि न्यू इंडिया एश्योरन्स कम्पनी लिमिटेड
            </span>
          </div>
        </Link>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <Link
          to="/"
          onClick={handleCloseMenu}
          className={location.pathname === "/" ? styles.activeLink : ""}
        >
          Home
        </Link>

        <Link
          to="/policies"
          onClick={handleCloseMenu}
          className={location.pathname === "/policies" ? styles.activeLink : ""}
        >
          Policies
        </Link>

        <Link
          to="/about"
          onClick={handleCloseMenu}
          className={location.pathname === "/about" ? styles.activeLink : ""}
        >
          About
        </Link>

        <button className={styles.quoteBtn} onClick={handleScrollToContact}>
          Get Quote
        </button>
      </div>

      <div className={styles.menuIcon} onClick={handleToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
    <div className={styles.navbarSpacer}></div>
    </>
  );
};

export default Navbar;
