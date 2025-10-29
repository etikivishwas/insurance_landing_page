import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartPulse, Car, Plane, Home } from "lucide-react";
import Lottie from "lottie-react";
import styles from "./styles.module.css";

import healthAnim from "./health.json";
import motorAnim from "./motor.json";
import travelAnim from "./travel.json";
import homeAnim from "./home.json";

const PopularPolicies = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const policies = [
    {
      icon: HeartPulse,
      title: "Health Insurance",
      description:
        "Comprehensive medical coverage to protect you and your family from unexpected healthcare costs.",
      link: "/policies/health",
      animation: healthAnim,
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description:
        "Safeguard your vehicle against accidents, theft, and damages with flexible motor plans.",
      link: "/policies/motor",
      animation: motorAnim,
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description:
        "Enjoy worry-free journeys with protection against trip cancellations, delays, and medical emergencies.",
      link: "/policies/travel",
      animation: travelAnim,
    },
    {
      icon: Home,
      title: "Rural / Home Insurance",
      description:
        "Secure your property and assets from natural calamities and unforeseen damages.",
      link: "/policies/home",
      animation: homeAnim,
    },
  ];

  const handleCardClick = (index, link) => {
    setLoading(true);
    setActiveAnimation(index);
    setTimeout(() => {
      navigate(link);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* Fullscreen loading overlay */}
      {loading && (
        <div className={styles.fullscreenLoader}>
          <Lottie
            animationData={policies[activeAnimation]?.animation}
            loop={false}
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}

      <section className={styles.section} id="popular-policies">
        <h2 className={styles.title}>Popular Policies</h2>
        <p className={styles.subtitle}>
          Explore our most trusted insurance plans designed to suit every need.
        </p>

        <div className={styles.cardGrid}>
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <div
                key={index}
                className={styles.card}
                onClick={() => handleCardClick(index, policy.link)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className={styles.iconWrapper}
                  animate={
                    isMobile
                      ? {
                          scale: [1, 1.1, 1],
                          filter: [
                            "drop-shadow(0 0 0px #004aad)",
                            "drop-shadow(0 0 10px #004aad)",
                            "drop-shadow(0 0 0px #004aad)",
                          ],
                        }
                      : hoveredCard === index
                      ? {
                          scale: 1.2,
                          filter: "drop-shadow(0 0 12px #004aad)",
                        }
                      : {
                          scale: 1,
                          filter: "drop-shadow(0 0 0px #004aad)",
                        }
                  }
                  transition={
                    isMobile
                      ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.3, ease: "easeInOut" }
                  }
                >
                  <Icon className={styles.icon} />
                </motion.div>
                <h3>{policy.title}</h3>
                <p>{policy.description}</p>
                <span className={styles.linkBtn}>View Policy →</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PopularPolicies;
