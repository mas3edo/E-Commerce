import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function NotFound() {
  return (
    <div className="error-responsive">
      <h1 className="error-title">404 Not Found</h1>
      <p className="error-desc">
        Your visited page not found. You may go home page.
      </p>
      <Link to="/" className="error-home-btn">
        <Icon
          icon="mdi:arrow-left"
          width={22}
          height={22}
          style={{ verticalAlign: "middle", marginRight: 8 }}
        />
        Back to Home Page
      </Link>
      <style>{`
        .error-responsive {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          padding: 0 16px;
        }
        .error-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #e53935;
          text-align: center;
        }
        .error-desc {
          color: #444;
          font-size: 1.1rem;
          margin-bottom: 32px;
          text-align: center;
        }
        .error-home-btn {
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 14px 38px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.18s;
          display: inline-block;
        }
        .error-home-btn:hover {
          background: #b71c1c;
        }
        @media (max-width: 600px) {
          .error-title {
            font-size: 2.1rem;
          }
          .error-desc {
            font-size: 0.98rem;
            margin-bottom: 22px;
          }
          .error-home-btn {
            font-size: 0.97rem;
            padding: 10px 0;
            width: 100%;
            border-radius: 10px;
            max-width: 260px;
          }
        }
      `}</style>
    </div>
  );
}

export default NotFound;
