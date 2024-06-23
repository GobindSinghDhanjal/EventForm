import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validate from '../utils/validateInfo';

const JobApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: 'Developer',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    skills: {
      JavaScript: false,
      CSS: false,
      Python: false,
      // add more skills as needed
    },
    interviewTime: '',
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialValues,
    validate,
    () => setSubmitted(true)
  );

  if (submitted) {
    return (
      <Navigate
        to="/success"
        state={{ ...values }}
      />
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">Job Application</h1>

          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              className="input"
              value={values.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              className="input"
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <label>
            Phone Number
            <input
              type="text"
              name="phoneNumber"
              className="input"
              value={values.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </label>

          <label>
            Applying for Position
            <select
              name="position"
              className="input"
              value={values.position}
              onChange={handleChange}
            >
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </label>

          {(values.position === 'Developer' || values.position === 'Designer') && (
            <label>
              Relevant Experience (years)
              <input
                type="number"
                name="relevantExperience"
                className="input"
                value={values.relevantExperience}
                onChange={handleChange}
                required
                min="1"
              />
              {errors.relevantExperience && <p className="error">{errors.relevantExperience}</p>}
            </label>
          )}

          {values.position === 'Designer' && (
            <label>
              Portfolio URL
              <input
                type="text"
                name="portfolioURL"
                className="input"
                value={values.portfolioURL}
                onChange={handleChange}
                required
              />
              {errors.portfolioURL && <p className="error">{errors.portfolioURL}</p>}
            </label>
          )}

          {values.position === 'Manager' && (
            <label>
              Management Experience
              <textarea
                name="managementExperience"
                className="input"
                value={values.managementExperience}
                onChange={handleChange}
                required
              />
              {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
            </label>
          )}

          <label>Additional Skills:</label>
          <div className="checkbox-group">
            {Object.keys(values.skills).map(skill => (
              <label key={skill}>
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={values.skills[skill]}
                  onChange={(e) => {
                    const { checked } = e.target;
                    handleChange({
                      target: {
                        name: 'skills',
                        value: { ...values.skills, [skill]: checked }
                      }
                    });
                  }}
                />
                {skill}
              </label>
            ))}
            {errors.skills && <p className="error">{errors.skills}</p>}
          </div>

          <br />

          <label>
            Preferred Interview Time
            <input
              type="datetime-local"
              name="interviewTime"
              className="input"
              value={values.interviewTime}
              onChange={handleChange}
              required
            />
            {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
          </label>

          <button type="submit" className="submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
