import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { sendCpuInquiry } from "../services/cpuInquiryApi";
import "../css/cpus.css";

const Cpus = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const cpuModelRef = useRef();
  const quantityRef = useRef();
  const ramRef = useRef();
  const storageRef = useRef();
  const messageRef = useRef();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      cpu_model: cpuModelRef.current.value,
      quantity: quantityRef.current.value,
      ram: ramRef.current.value,
      storage: storageRef.current.value,
      message: messageRef.current.value,
    };

   try {
      await sendCpuInquiry(formData);

      if (response.status === 201) {
        setSuccessMsg("✅ Submitted successfully! Our team will contact you soon.");
        setErrorMsg("");

        // ✅ CLEAR ALL INPUTS (IMPORTANT FIX)
        fullNameRef.current.value = "";
        emailRef.current.value = "";
        cpuModelRef.current.value = "";
        quantityRef.current.value = "";
        ramRef.current.value = "";
        storageRef.current.value = "";
        messageRef.current.value = "";

        // Hide success message after 4 seconds
        setTimeout(() => {
          setSuccessMsg("");
        }, 4000);
      }
    } catch (error) {
      setErrorMsg("❌ Failed to submit. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="sos-hero">
        <span className="sos-hero-badge">
          <span className="sos-badge-icon">
            <i className="bi bi-cpu"></i>
          </span>
          <span className="sos-spancir">Strategic Alliances</span>
        </span>
        <h1>
          <span className="sos-white-text">Next-Gen</span>{" "}
          <span className="sos-blue-text">Processors</span>
        </h1>
        <p>
          Our strategic partnerships and collaborations that drive innovation
          and deliver exceptional value.
        </p>
        <div className="sos-btns">
          <NavLink to="/services" className="sos-btn-primary">
            Our Services <span className="sos-arrow">➜</span>
          </NavLink>
          <NavLink to="/career" className="sos-btn-outline">
            Explore Careers
          </NavLink>
        </div>
      </section>

      {/* FORM */}
      <section className="sos-pipeline">
        <div className="sos-form-wrapper">
          <h1>Our CPU Pipeline</h1>
          <p className="sos-subtitle">Submit your custom requirements below.</p>

          {successMsg && <div className="sos-success-msg">{successMsg}</div>}
          {errorMsg && <div className="sos-error-msg">{errorMsg}</div>}

          <form onSubmit={handleSubmit} className="sos-custom-form">
            <div className="sos-form-grid">
              <div className="sos-input-group">
                <label>Full Name</label>
                <input type="text" ref={fullNameRef} required />
              </div>

              <div className="sos-input-group">
                <label>Admin Email</label>
                <input type="email" ref={emailRef} required />
              </div>

              <div className="sos-input-group">
                <label>CPU Model</label>
                <input type="text" ref={cpuModelRef} required />
              </div>

              <div className="sos-input-group">
                <label>Quantity</label>
                <input type="number" ref={quantityRef} min="1" required />
              </div>

              <div className="sos-input-group">
                <label>RAM</label>
                <input type="text" ref={ramRef} required />
              </div>

              <div className="sos-input-group">
                <label>Storage</label>
                <input type="text" ref={storageRef} required />
              </div>

              <div className="sos-input-group sos-full-width">
                <label>Use Case Details</label>
                <textarea ref={messageRef} rows="4"></textarea>
              </div>
            </div>

            <button type="submit" className="sos-btn-primary sos-submit-btn">
              Submit Configuration ➜
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="sos-cta-section">
        <h2>Interested in Our CPUs?</h2>
        <p>Contact our team to learn more about partnership opportunities.</p>
        <NavLink to="/contact" className="sos-cta-btn">
          Contact Sales <span>→</span>
        </NavLink>
      </section>
    </>
  );
};

export default Cpus;
