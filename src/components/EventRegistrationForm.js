import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validate from '../utils/validateInfo';
import SuccessPage from '../pages/SuccessPage';

const EventRegistrationForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    const { name, email, age, attendingWithGuest, guestName } = values;
    return (
      <Navigate
        to="/success"
        state={{ name, email, age, attendingWithGuest, guestName }}
      />
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">Event Registration</h1>

          <label>
            Name
            <input
              type="text"
              name="name"
              className="input"
              value={values.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
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
            Age
            <input
              type="number"
              name="age"
              className="input"
              value={values.age}
              onChange={handleChange}
              required
              min="1"
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </label>

          <label>
            Are you attending with a guest?
            <select
              name="attendingWithGuest"
              className="input"
              value={values.attendingWithGuest}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>

          {values.attendingWithGuest === 'Yes' && (
            <label>
              Guest Name
              <input
                type="text"
                name="guestName"
                className="input"
                value={values.guestName}
                onChange={handleChange}
                required
              />
              {errors.guestName && <p className="error">{errors.guestName}</p>}
            </label>
          )}

          <button type="submit" className="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
