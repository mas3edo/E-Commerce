import React from "react";
import { useContext } from "react";
import { AuthContext } from "./contaxt";
import { Link } from "react-router-dom";

function SignupForm() {
  const { signup } = useContext(AuthContext);
  const [showPopup, setShowPopup] = React.useState(false);
  const handleGoogleSignup = () => {
    // هنا ممكن تضيف منطق تسجيل الدخول عبر جوجل
    alert("Google Sign-Up is not implemented yet.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    if (!name || !email || !password) {
      return setShowPopup(true);
    }
    signup(name, email, password);
  };

  return (
    <div className="signup-page">
      <div className="left-section">
        <img
          src="/signup-illustration.png"
          alt="Shopping"
          className="illustration"
        />
      </div>
      <div className="right-section">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email or Phone Number" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className="create-btn">
            Create Account
          </button>
        </form>
        <button onClick={handleGoogleSignup} className="google-btn">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google logo"
            className="google-icon"
          />
          Sign up with Google
        </button>
        <p className="login-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <div className="popup">
        <h3>Please fill in all fields.</h3>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>

      <style>
        {`
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background: #f9fafb;
        }

        .signup-page {
          display: flex;
          flex-direction: row;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          max-width: 1000px;
          width: 95%;
          margin: 60px auto 140px auto;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .left-section {
          flex: 1.2;
          background: #e5f6ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .right-section {
          flex: 1;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .right-section h2 {
          margin-bottom: 10px;
          font-size: 26px;
          font-weight: bold;
          color: #111;
        }

        .right-section p {
          color: #666;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .form input {
          display: block;
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .form input:focus {
          outline: none;
          border-color: #e53935;
          box-shadow: 0 0 0 2px rgba(229,57,53,0.2);
        }

        .create-btn {
          width: 100%;
          padding: 14px;
          background-color: #e53935;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 15px;
          cursor: pointer;
          margin-bottom: 15px;
          transition: background 0.3s;
        }

        .create-btn:hover {
          background-color: #c62828;
        }

        .google-btn {
          width: 100%;
          padding: 12px;
          background-color: white;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
          gap: 10px;
          margin-bottom: 20px;
          font-size: 14px;
          transition: background 0.3s;
        }

        .google-btn:hover {
          background: #f5f5f5;
        }

        .google-icon {
          width: 20px;
          height: 20px;
        }

        .login-text {
          text-align: center;
          color: #555;
          font-size: 14px;
        }

        .login-text a {
          color: #e53935;
          text-decoration: none;
          font-weight: bold;
        }

        .login-text a:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .signup-page {
            flex-direction: column;
          }
          .left-section {
            display: none; /* ممكن تخليها فوق لو عايز */
          }
          .right-section {
            padding: 30px 20px;
          }
        }
        .popup {
          display: ${showPopup ? "block" : "none"};
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          text-align: center;
        }

        .popup h3 {
          margin-bottom: 15px;
          color: #e53935;
        }
        .popup button {
          padding: 8px 16px;
          background: #e53935;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .popup button:hover {
          background: #c62828;
        }
      `}
      </style>
    </div>
  );
}

export default SignupForm;
