import React, { useRef, useState } from "react";
import { UilFacebook, UilGoogle } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Services/contexts/AuthContext";
import { Alert } from "react-bootstrap";
import { Dashboard_Home } from "../../Dashboard_Components";
const Sign_in_content = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
     navigate('/Dashboard/Home')
     console.log("signup successful");
    } 
    catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  const alertStyle = {
    backgroundColor: "#2725e7",
              width: "15rem",
              height: "3rem",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "Inter",
              fontWeight: "500",
              borderRadius: ".3rem",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  }

  return (
    <div className="urcrypto_sign_in_content">
      <div className="urcrypto_sign_in_content_header">
        <h1> Welcome Back</h1>
        {error && (
          <Alert
            style={alertStyle}
            variant="danger"
          >
            {error}
          </Alert>
        )}
        <p>Signup for an account</p>
      </div>
      
      <div className="urcrypto_social_sign_in">
        <div>
          <UilGoogle />
          <p>Google</p>
        </div>
        <div>
          <UilFacebook />
          <p>Facebook</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="urcrypto_email_sign_in">
        <p className="urcrypto_email_sign_in_heading">or continue with</p>

        <input
          type="email"
          name="email"
          ref={emailRef}
          required={true}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          ref={passwordRef}
          required={true}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirm password"
          ref={confirmPasswordRef}
          required={true}
          placeholder="Confirm Password"
        />

        <div className="urcrypto_email_sign_in_features">
          <p>toggle</p>
          <Link to="/">Recover Password</Link>
        </div>

        <button
          disabled={Loading}
          type="submit"
          name="login"
          onClick={handleSubmit}
          className="urcrypto_email_sign_in_btn"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Sign_in_content;
