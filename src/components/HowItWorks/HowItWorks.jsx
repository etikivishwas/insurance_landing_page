import React from "react";
import styles from "./styles.module.css";
import { FileSearch, ClipboardList, Calculator, PhoneCall } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileSearch className={styles.icon} />,
      title: "Choose Your Policy",
      description: "Select from a range of trusted insurance options tailored for you.",
    },
    {
      icon: <ClipboardList className={styles.icon} />,
      title: "Fill Basic Details",
      description: "Provide quick personal or vehicle details to proceed securely.",
    },
    {
      icon: <Calculator className={styles.icon} />,
      title: "Get Quote & Compare",
      description: "Review and compare multiple plans to choose what fits best.",
    },
    {
      icon: <PhoneCall className={styles.icon} />,
      title: "Buy or Contact Agent",
      description: "Purchase online instantly or get guidance from our support team.",
    },
  ];

  return (
    <section className={styles.section} id="how-it-works">
      <h2 className={styles.title}>How It Works</h2>
      <p className={styles.subtitle}>
        Getting insured with us is quick, simple, and transparent.
      </p>

      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepNumber}>{index + 1}</div>
            <div className={styles.iconWrapper}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
