import React from "react";
import { Link, useLocation } from "react-router-dom";

const SuccessPage = (props) => {
  console.log("hello");
  const { state } = useLocation();
  console.log(state);
  const { name, email, age, attendingWithGuest, guestName } = state;

  return (
    <div className="container">
      <div className="success-container">
        <div className="success-icon">
          <div className="tick-mark"></div>
        </div>
        <p className="success-message">Successfully Registered</p>

        <div className="form-container">
          <div className="form">
            <div className="summary">
              <h2>Registration Summary</h2>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Age: {age}</p>
              <p>Attending with guest: {attendingWithGuest}</p>
              {attendingWithGuest === "Yes" && <p>Guest Name: {guestName}</p>}
            </div>

            <Link to="/" className="back-link">
              Back to Registration Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;