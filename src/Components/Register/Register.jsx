import React from "react";
import './Register.css'

const Register = () => {
  return (
    <div className="register">
      <div className="box">
        <h2>Sing Up</h2>
        <form>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              required
            />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Register;
