import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";
import {
  HeartPulse,
  Car,
  Plane,
  Home,
  Sprout,
  CreditCard,
  Wrench,
  PlaneTakeoff,
  ShieldPlus,
  ShieldCheck,
  Ship,
  Flame,
  Layers,
  Package,
  FileText,
  ClipboardCheck,
} from "lucide-react";

import policyDetails from "./PolicyDetails"; // 👈 Import your details file

const Policies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [activeTab, setActiveTab] = useState("highlights");
  const { type } = useParams();
  const detailsRef = useRef(null); // 👈 Reference for smooth scroll to details section

  const policies = [
    {
      id: "motor",
      icon: <Car className={styles.icon} />,
      title: "Motor Insurance",
      description:
        "Ensure complete protection for your vehicle against accidents, theft, and damages with flexible coverage options.",
    },
    {
      id: "home",
      icon: <Home className={styles.icon} />,
      title: "Home Insurance",
      description:
        "Protect your home and valuables from fire, theft, and natural disasters.",
    },
    {
      id: "health",
      icon: <HeartPulse className={styles.icon} />,
      title: "Health Insurance",
      description:
        "Comprehensive medical coverage for individuals and families.",
    },
    {
      id: "travel",
      icon: <Plane className={styles.icon} />,
      title: "Travel Insurance",
      description:
        "Covers trip cancellations, delays, medical emergencies, and lost luggage.",
    },
    {
      id: "agriculture",
      icon: <Sprout className={styles.icon} />,
      title: "Agriculture Insurance",
      description:
        "Protect crops and livestock against natural calamities and losses.",
    },
    {
      id: "credit",
      icon: <CreditCard className={styles.icon} />,
      title: "Credit Insurance",
      description:
        "Safeguard your business from financial losses due to credit defaults.",
    },
    {
      id: "engineering",
      icon: <Wrench className={styles.icon} />,
      title: "Engineering Insurance",
      description:
        "Coverage for machinery, plants, and construction projects against damage or failure.",
    },
    {
      id: "aviation",
      icon: <PlaneTakeoff className={styles.icon} />,
      title: "Aviation Insurance",
      description:
        "Comprehensive coverage for aircraft, crew, and liability exposures.",
    },
    {
      id: "personalaccident",
      icon: <ShieldPlus className={styles.icon} />,
      title: "Personal Accident Insurance",
      description:
        "Financial protection in case of accidental injury, disability, or death.",
    },
    {
      id: "liability",
      icon: <ShieldCheck className={styles.icon} />,
      title: "Liability Insurance",
      description:
        "Protects against third-party claims for injury or property damage.",
    },
    {
      id: "marinehull",
      icon: <Ship className={styles.icon} />,
      title: "Marine Hull Insurance",
      description:
        "Covers vessels, ships, and boats against damage, collision, or loss.",
    },
    {
      id: "fire",
      icon: <Flame className={styles.icon} />,
      title: "Fire Insurance",
      description:
        "Covers damages to property or goods due to fire, lightning, or explosion.",
    },
    {
      id: "misc",
      icon: <Layers className={styles.icon} />,
      title: "Miscellaneous Insurance",
      description:
        "Specialized products covering various non-traditional risks.",
    },
    {
      id: "marinecargo",
      icon: <Package className={styles.icon} />,
      title: "Marine Cargo Insurance",
      description:
        "Protection for goods in transit against loss or damage by sea, air, or land.",
    },
  ];

  useEffect(() => {
    if (type) {
      const found = policies.find((p) => p.id === type);
      if (found) {
        setSelectedPolicy(found);
        setActiveTab("highlights");
        setTimeout(() => {
          detailsRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [type]);

  const handleLearnMore = (policy) => {
    if (selectedPolicy?.title === policy.title) {
      setSelectedPolicy(null);
    } else {
      setSelectedPolicy(policy);
      setActiveTab("highlights");
      // 👇 Smooth scroll to details after rendering
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <h2 className={styles.title}>Our Insurance Policies</h2>
        <p className={styles.subtitle}>
          Explore a full range of coverage options designed to secure your
          health, assets, and future.
        </p>

        {/* 🔹 Policies Grid */}
        <div className={styles.cardGrid}>
          {policies.map((policy, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{policy.icon}</div>
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
              <button
                className={styles.linkBtn}
                onClick={() => handleLearnMore(policy)}
              >
                {selectedPolicy?.title === policy.title
                  ? "Hide Details ↑"
                  : "Learn More →"}
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 Policy Details Section */}
        {selectedPolicy && (
          <div ref={detailsRef} className={styles.detailsCard}>
            <h3 className={styles.detailsTitle}>{selectedPolicy.title}</h3>

            {/* Tabs */}
            <div className={styles.tabContainer}>
              <div
                className={`${styles.tab} ${
                  activeTab === "highlights" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("highlights")}
              >
                <FileText className={styles.tabIcon} />
                Product Highlights
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "claims" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("claims")}
              >
                <ClipboardCheck className={styles.tabIcon} />
                Claim Process
              </div>
            </div>

            {/* Content Area */}
            <div className={styles.detailsContent}>
              {activeTab === "highlights" ? (
                policyDetails[selectedPolicy.id]?.highlights ? (
                  <ul>
                    {policyDetails[selectedPolicy.id].highlights.map(
                      (point, i) => (
                        <li key={i}>{point}</li>
                      )
                    )}
                  </ul>
                ) : (
                  <p>No highlights available for this policy.</p>
                )
              ) : policyDetails[selectedPolicy.id]?.claims ? (
                <ul>
                  {policyDetails[selectedPolicy.id].claims.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              ) : (
                <p>No claim process available for this policy.</p>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Policies;
