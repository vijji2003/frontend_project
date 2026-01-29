import React, { useState } from "react";
import "../css/carrer.css";
import { validateCareerForm } from "../utils/careerValidation";
import { createApplication } from "../services/careerApi.js";

function Career() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    /*form validation*/
    const validationError = validateCareerForm(formData);

    if (validationError) {
      setError(validationError);
      setMessage("");
      return;
    }


    try {
      const res = await createApplication(formData);
      setMessage(res.message); // Django message
      setError("");
      e.target.reset();
    } catch (err) {
      setError("Submission failed. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="careers-page">
      {/* HERO */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>
            Build your career with us. We're looking for passionate individuals who
            <br /> want to shape the future of technology.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <span className="benefits-tag">Why Join Us</span>
        <h2>Benefits & Perks</h2>
        <p className="benefits-sub">
          We believe in taking care of our team with comprehensive benefits.
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-box">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <h3>Career Growth</h3>
            <p>Clear career paths with mentorship and learning opportunities.</p>
          </div>

          <div className="benefit-card">
            <div className="icon-box">
              <i className="bi bi-heart-pulse"></i>
            </div>
            <h3>Health Benefits</h3>
            <p>Comprehensive health insurance for you and your family.</p>
          </div>

          <div className="benefit-card">
            <div className="icon-box">
              <i className="bi bi-people"></i>
            </div>
            <h3>Great Culture</h3>
            <p>Collaborative environment with talented professionals.</p>
          </div>

          <div className="benefit-card">
            <div className="icon-box">
              <i className="bi bi-cup-hot"></i>
            </div>
            <h3>Work-Life Balance</h3>
            <p>Flexible work arrangements and generous PTO.</p>
          </div>
        </div>
      </section>

      {/* JOBS SECTION */}
      <section className="jobs-section" id="jobs">
        <span className="section-tag">Open Positions</span>
        <h2>Current Opportunities</h2>
        <p className="section-sub">
          Explore our open positions and find your perfect role.
        </p>

        <div className="jobs-list">
          <div className="job-card">
            <div className="job-info">
              <h3>Senior Cloud Architect</h3>
              <div className="job-meta">
                <span><i className="bi bi-building"></i> Cloud Solutions</span>
                <span><i className="bi bi-geo-alt"></i> Silicon Valley, CA</span>
                <span><i className="bi bi-clock"></i> Full-time</span>
              </div>
            </div>
            <a href="#apply" className="apply-btn">Apply Now</a>
          </div>

          <div className="job-card">
            <div className="job-info">
              <h3>DevOps Engineer</h3>
              <div className="job-meta">
                <span><i className="bi bi-cpu"></i> Engineering</span>
                <span><i className="bi bi-globe"></i> Remote</span>
                <span><i className="bi bi-clock"></i> Full-time</span>
              </div>
            </div>
            <a href="#apply" className="apply-btn">Apply Now</a>
          </div>

          <div className="job-card">
            <div className="job-info">
              <h3>Business Analyst</h3>
              <div className="job-meta">
                <span><i className="bi bi-briefcase"></i> Consulting</span>
                <span><i className="bi bi-geo-alt"></i> New York, NY</span>
                <span><i className="bi bi-clock"></i> Full-time</span>
              </div>
            </div>
            <a href="#apply" className="apply-btn">Apply Now</a>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section className="apply-section" id="apply">
        <span className="section-tag">Apply Now</span>
        <h2>Submit Your Application</h2>
        <p className="section-sub">
          Ready to join our team? Fill out the form below and upload your resume.
        </p>

        {message && <div className="form-success">{message}</div>}
        {error && <div className="form-error">{error}</div>}

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="full_name" required />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="form-group">
            <label>College / University *</label>
            <input type="text" name="college" required />
          </div>

          <div className="form-group half">
            <div>
              <label>CGPA *</label>
              <input type="text" name="cgpa" required />
            </div>
            <div>
              <label>Year of Passing *</label>
              <input type="number" name="year_of_passing" required />
            </div>
          </div>

          <div className="form-group">
            <label>Experience (in years)</label>
            <input type="text" name="experience" />
          </div>

          <div className="form-group">
            <label>Skills *</label>
            <input type="text" name="skills" required />
          </div>

          <div className="form-group">
            <label>Resume / CV *</label>
            <div className="resume-box">
              <input type="file" name="resume" required />
              <p>Upload your resume (PDF / DOC)</p>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

export default Career;
