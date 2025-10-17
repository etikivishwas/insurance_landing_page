import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "./img1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={handleCloseMenu} className={styles.logoLink}>
          <img
            src={Image} // imported logo image
            alt="New India Assurance Logo"
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>The New India Assurance Co. Ltd</span>
            <hr className={styles.line}/>
            <span className={styles.logoSubtitle}>दि न्यू इंडिया एश्योरन्स कम्पनी लिमिटेड</span>
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

        <a href="#contact" onClick={handleCloseMenu}>
          Contact
        </a>

        <button className={styles.quoteBtn}>Get Quote</button>
      </div>

      <div className={styles.menuIcon} onClick={handleToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
