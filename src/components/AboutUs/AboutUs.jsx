import React from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar"; // adjust if needed
import awardsImage from "./awards.png"; // your uploaded awards image
import Footer from "../Footer/Footer"; // adjust if needed

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <p>
            <strong>New India Assurance Company Limited</strong> is a{" "}
            <strong>leading public sector general insurance company in India</strong>,
            owned by the <strong>Government of India</strong>. Founded by
            <strong> Sir Dorabji Tata in 1919</strong>, it was
            <strong> nationalized in 1973</strong>. It is a{" "}
            <strong>dominant force in the Indian non-life insurance market</strong>,
            known for its <strong>extensive network with 1600+ offices across the country</strong>.
            The company has a <strong>significant global presence</strong>, operating in
            <strong> over 25 countries</strong>.
          </p>

          <p>
            New India Assurance boasts a <strong>remarkably diverse product portfolio</strong>,
            extending far beyond conventional offerings. The company provides
            <strong> complex and specialized coverage</strong> for large-scale operations, including{" "}
            <strong>aviation, marine insurance, and property insurance for large risks</strong>.
            At the other end of the spectrum, it caters to the
            <strong> rural and underserved markets</strong> with a range of
            <strong> micro-insurance products</strong>, demonstrating a{" "}
            <strong>commitment to serving a wide array of customers</strong> and their unique needs.
          </p>

          <p>
            In the <strong>fiscal year 2024–25</strong>, New India Assurance maintained its position as the{" "}
            <strong>largest general insurer in India</strong>, with an
            <strong> all-time high gross written premium (GWP)</strong> of over{" "}
            <strong>₹43,618 crore</strong> and a <strong>market share of 12.57%</strong>.
            The company maintains a <strong>strong solvency ratio of 1.91x</strong>,
            well above the regulatory requirement, reflecting its{" "}
            <strong>financial stability</strong>. The company continued its strong performance in
            <strong> Q1 FY26</strong>, with a <strong>GWP of ₹13,334 crore</strong>,
            marking a <strong>13.11% year-on-year growth</strong>. At the end of Q1 FY26,
            the company’s <strong>market share increased to 15.51%</strong> from 14.65% in the same period last year.
          </p>

          <p>
            The company has consistently received <strong>high ratings from major credit agencies</strong>,
            highlighting its <strong>financial strength</strong>. It holds a{" "}
            <strong>'CRISIL AAA/Stable'</strong> rating, the
            <strong> highest possible credit rating</strong>, indicating a{" "}
            <strong>strong capacity to meet its financial obligations</strong>.
            It also has a <strong>'B++ (Good)' Financial Strength Rating</strong> from AM Best.
          </p>

          <p>
            The <strong>Insurance Regulatory and Development Authority of India (IRDAI)</strong>
            has consistently identified New India Assurance as a{" "}
            <strong>Domestic Systemically Important Insurer (D-SII)</strong>.
            This designation is reserved for insurers whose
            <strong> size, market importance, and domestic and global interconnectedness</strong>
            are so significant that their distress or failure could cause a{" "}
            <strong>major disruption to the domestic financial system</strong>.
          </p>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className={styles.awardsSection}>
        <h2 className={styles.awardsTitle}>AWARDS</h2>
        <img
          src={awardsImage}
          alt="Awards"
          className={styles.awardsImage}
        />

        <div className={styles.awardsTableWrapper}>
          <h3 className={styles.awardsSubTitle}>Awards Won By The Company</h3>
          <table className={styles.awardsTable}>
            <thead>
              <tr>
                <th>YEAR</th>
                <th>AWARDS WON BY THE COMPANY</th>
                <th>AWARDING AUTHORITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022–23</td>
                <td>Excellence & Leadership in BFSI</td>
                <td>ETascent</td>
              </tr>
              <tr>
                <td>2022–23</td>
                <td>General Insurance Company Of The Year</td>
                <td>BFSI</td>
              </tr>
              <tr>
                <td>2022–23</td>
                <td>Most Preferred Workplace Of The Year</td>
                <td>BFSI</td>
              </tr>
              <tr>
                <td>2022–23</td>
                <td>First MCA Corporate Trophy</td>
                <td>Parsee Gymkhana Mumbai</td>
              </tr>
              <tr>
                <td>2022–23</td>
                <td>Segment Leadership & Digital Inclusion</td>
                <td>Skoch Challenger Award</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
