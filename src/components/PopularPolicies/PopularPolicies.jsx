import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { HeartPulse, Car, Plane, Home } from "lucide-react";

const PopularPolicies = () => {
  const policies = [
    {
      icon: <HeartPulse className={styles.icon} />,
      title: "Health Insurance",
      description:
        "Comprehensive medical coverage to protect you and your family from unexpected healthcare costs.",
      link: "/policies/health",
    },
    {
      icon: <Car className={styles.icon} />,
      title: "Motor Insurance",
      description:
        "Safeguard your vehicle against accidents, theft, and damages with flexible motor plans.",
      link: "/policies/motor",
    },
    {
      icon: <Plane className={styles.icon} />,
      title: "Travel Insurance",
      description:
        "Enjoy worry-free journeys with protection against trip cancellations, delays, and medical emergencies.",
      link: "/policies/travel",
    },
    {
      icon: <Home className={styles.icon} />,
      title: "Rural / Home Insurance",
      description:
        "Secure your property and assets from natural calamities and unforeseen damages.",
      link: "/policies/home",
    },
  ];

  return (
    <section className={styles.section} id="popular-policies">
      <h2 className={styles.title}>Popular Policies</h2>
      <p className={styles.subtitle}>
        Explore our most trusted insurance plans designed to suit every need.
      </p>

      <div className={styles.cardGrid}>
        {policies.map((policy, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>{policy.icon}</div>
            <h3>{policy.title}</h3>
            <p>{policy.description}</p>
            <Link to={policy.link} className={styles.linkBtn}>
              View Policy →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPolicies;
