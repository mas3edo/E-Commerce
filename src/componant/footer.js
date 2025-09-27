// Footer.jsx
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Exclusive / Subscribe */}
        <div className="footer-col">
          <h3>Exclusive</h3>
          <p className="title">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>
              <Icon icon="mdi:send" width={20} />
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account */}
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li>
              <Link to="/profile">My Account</Link>
            </li>
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="footer-col">
          <h4>Quick Link</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div className="footer-col">
          <h4>Download App</h4>
          <p className="small">Save $3 with App New User Only</p>
          <div className="download">
            <img
              src="https://i.ibb.co/0jGqS3N/qr.png"
              alt="QR"
              className="qr"
            />
            <div className="stores">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </div>
          </div>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Icon icon="mdi:facebook" width={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Icon icon="mdi:twitter" width={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Icon icon="mdi:instagram" width={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Icon icon="mdi:linkedin" width={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>

      <style>{`
        .footer {
          background: #000;
          color: #fff;
          padding: 40px 80px 20px;
        }
        .footer-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
        }
        .footer-col h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }
        .footer-col h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        .footer-col p, 
        .footer-col ul li, 
        .footer-col a {
          font-size: 14px;
          margin: 6px 0;
          color: #ccc;
          text-decoration: none;
          list-style: none;
        }
        .footer-col a:hover {
          color: #fff;
        }
        .footer-col ul {
          padding: 0;
          margin: 0;
        }
        .subscribe-box {
          display: flex;
          margin-top: 10px;
          border: 1px solid #555;
          border-radius: 4px;
          overflow: hidden;
        }
        .subscribe-box input {
          flex: 1;
          padding: 8px;
          border: none;
          outline: none;
          background: transparent;
          color: #fff;
        }
        .subscribe-box button {
          background: none;
          border: none;
          padding: 0 12px;
          color: #fff;
          cursor: pointer;
        }
        .download {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin: 10px 0;
        }
        .qr {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
        .stores img {
          width: 140px;
          margin-bottom: 8px;
        }
        .socials {
          display: flex;
          gap: 14px;
          margin-top: 12px;
        }
        .socials a {
          color: #fff;
        }
        .copyright {
          text-align: center;
          margin-top: 30px;
          font-size: 12px;
          color: #aaa;
          border-top: 1px solid #222;
          padding-top: 12px;
        }
        .small {
          font-size: 12px;
          color: #aaa;
          margin-bottom: 8px;
        }
        /* Responsive */
        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .download {
            align-items: center;
          }
          .stores img {
            width: 120px;
          }
        }
      `}</style>
    </footer>
  );
}
