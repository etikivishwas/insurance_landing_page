import React, { useState } from "react";
import styles from "./styles.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    policyNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwE8PJ66-SuX-FMh6lQ8RdGYMI1UXzUjC7amOmsjPnEZgcNBZ89wG1A6Qq0VqEKFfGU3A/exec";

      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formBody.append(key, formData[key]);
      });

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formBody,
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          insuranceType: "",
          message: "",
        });
      } else {
        setStatus("Error submitting form. Try again.");
        console.error(result.error);
      }
    } catch (error) {
      setStatus("Error submitting form. Try again.");
      console.error(error);
    }
  };

  return (
    // 👇 Added id for smooth scroll
    <section id="contact-section" className={styles.contactSection}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <p>Get in touch with our insurance advisors for personalized assistance.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Insurance Type</label>
            <select
              name="insuranceType"
              required
              value={formData.insuranceType}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option>Health Insurance</option>
              <option>Life Insurance</option>
              <option>Motor Insurance</option>
              <option>Home Insurance</option>
              <option>Travel Insurance</option>
              <option>Business Insurance</option>
            </select>
          </div>

          

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>

        {status && <div className={styles.infoBox}>{status}</div>}
      </div>
    </section>
  );
};

export default Contact;
