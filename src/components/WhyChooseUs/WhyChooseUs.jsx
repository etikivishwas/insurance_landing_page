import React from "react";
import styles from "./styles.module.css";
import { ShieldCheck, Zap, Layers, Headphones } from "lucide-react";
import image1 from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import image4 from './img4.png';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className={styles.icon} />,
      title: "Authorized Partner",
      description: "Official New India Assurance partner with trusted service.",
    },
    {
      icon: <Zap className={styles.icon} />,
      title: "Instant Quote & Easy Purchase",
      description: "Get your insurance quote instantly and buy online hassle-free.",
    },
    {
      icon: <Layers className={styles.icon} />,
      title: "Wide Range of Policies",
      description:
        "Health, Motor, Travel, Rural — comprehensive coverage for every need.",
    },
    {
      icon: <Headphones className={styles.icon} />,
      title: "Transparent & Supportive",
      description:
        "Clear terms, transparent pricing, and responsive customer support.",
    },
  ];

  return (
    <section className={styles.section} id="why-choose-us">
      <h2 className={styles.title}>Why Choose Us</h2>
      <p className={styles.subtitle}>
        Experience trusted insurance solutions backed by New India Assurance.
      </p>

      <div className={styles.cardGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.item1}>
            <p className={styles.para2}>REPUTATION</p>
            <p className={styles.para1}>We take great pride in our reputation. Providing reliable insurance coverage to our customer for 103+ years have earned us a strong reputation in the industry. We have a proven track record of providing timely hassle-free claims processing, which is a testament to our commitment to customer satisfaction. The financial stability and strength of our Company gives our customers peace of mind, safe in the knowledge that we can meet our obligations when they need us the most. When you choose us, you can be assured that we have your best interest in mind.
            </p>
          </div>
          <div className={styles.item2}>
            <div className={styles.imageSection}>
              <img
                src={image1}
                alt="Hero"
                className={styles.heroImage}
              />
            </div>

          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item2}>
            <div className={styles.imageSection}>
              <img
                src={image2}
                alt="Hero"
                className={styles.heroImage}
              />
            </div>

          </div>
          <div className={styles.item1}>
            <p className={styles.para2}>RANGE OF PRODUCTS </p>
            <p className={styles.para1}>We offer a wide range of insurance products to meet the diverse needs of our customers. Whether you are looking for coverage for your home, health, vehicle or business, we have a policy to fit your needs. Our team of experience professionals will work with you to understand your needs and provide the best insurance solution for the same. We are committed to making insurance accessible and easy to understand. Choosing us, you can be confident that you have the coverage you need to protect the things that matter the most.
            </p>
          </div>

        </div>
        <div className={styles.items}>
          <div className={styles.item1}>
            <p className={styles.para2}>NETWORK OF OFFICES </p>
            <p className={styles.para1}>We have a vast network of offices across the country. We understand that the insurance needs can vary from region to region, which is why our offices are staffed with experienced professionals who understand the local market and can provide tailored insurance solutions to meet your unique needs. With our network of offices, you can be confident that you have access to the best insurance products and services available, no matter where you are located.
            </p>
          </div>
          <div className={styles.item2}>
            <div className={styles.imageSection}>
              <img
                src={image3}
                alt="Hero"
                className={styles.heroImage}
              />
            </div>

          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item2}>
            <div className={styles.imageSection}>
              <img
                src={image4}
                alt="Hero"
                className={styles.heroImage}
              />
            </div>

          </div>
          <div className={styles.item1}>
            <p className={styles.para2}>TRUSTWORTHINESS </p>
            <p className={styles.para1}>At New India, trust is at the heart of everything we do. Our commitment to trustworthiness is reflected in everything we do; from the comprehensive insurance products we offer to our prompt and fair claims handling process. We are dedicated to delivering our promises and ensuring that our customers have a positive experience with us every step of the way. For us, trust is not just a word, it’s a way of doing business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
