import React from "react";
import { Link, useLocation } from "react-router-dom";

const SuccessPage = () => {
  const { state } = useLocation();
  const {
    fullName,
    email,
    phoneNumber,
    position,
    relevantExperience,
    portfolioURL,
    managementExperience,
    skills,
    interviewTime
  } = state;

  return (
    <div className="container">
      <div className="success-container">
        <div className="success-icon">
          <div className="tick-mark"></div>
        </div>
        <p className="success-message">Application Submitted Successfully</p>

        <div className="form-container">
          <div className="form">
            <div className="summary">
              <h2>Application Summary</h2>
              <p><strong>Full Name:</strong> {fullName}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone Number:</strong> {phoneNumber}</p>
              <p><strong>Applying for Position:</strong> {position}</p>

              {(position === "Developer" || position === "Designer") && (
                <p><strong>Relevant Experience:</strong> {relevantExperience} years</p>
              )}

              {position === "Designer" && (
                <p><strong>Portfolio URL:</strong> {portfolioURL}</p>
              )}

              {position === "Manager" && (
                <p><strong>Management Experience:</strong> {managementExperience}</p>
              )}

              {position === "Developer" && (
                <>
                  <p><strong>Additional Skills:</strong></p>
                  <ul>
                    {Object.entries(skills).map(([skill, hasSkill]) => hasSkill && (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}

              <p><strong>Preferred Interview Time:</strong> {new Date(interviewTime).toLocaleString()}</p>
            </div>

            <Link to="/" className="back-link">
              Back to Application Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
