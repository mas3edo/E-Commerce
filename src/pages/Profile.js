import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuIcon({ onClick }) {
  return (
    <button
      className="profile-menu-icon"
      onClick={onClick}
      aria-label="Open menu"
    >
      <span className="profile-menu-bar"></span>
      <span className="profile-menu-bar"></span>
      <span className="profile-menu-bar"></span>
    </button>
  );
}

function Profile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="profile-container">
      {isMobile && (
        <>
          <nav className="profile-mobile-categories">
            <Link to="/profile" className="profile-mobile-link active">
              My Profile
            </Link>
            <Link to="#" className="profile-mobile-link">
              Address Book
            </Link>
            <Link to="#" className="profile-mobile-link">
              My Payment Options
            </Link>
            <Link to="#" className="profile-mobile-link">
              My Returns
            </Link>
            <Link to="#" className="profile-mobile-link">
              My Cancellations
            </Link>
            <Link to="#" className="profile-mobile-link">
              My WishList
            </Link>
          </nav>
        </>
      )}
      <aside
        className={`profile-sidebar${
          isMobile ? (sidebarOpen ? " open" : " closed") : ""
        }`}
        style={
          isMobile
            ? {
                position: "absolute",
                zIndex: 100,
                left: sidebarOpen ? 0 : "-100vw",
                top: 0,
                height: "100vh",
                transition: "left 0.25s",
              }
            : {}
        }
      >
        <nav>
          <div className="profile-section">
            <div className="profile-section-title">Manage My Account</div>
            <Link to="#" className="profile-link active">
              My Profile
            </Link>
            <Link to="#" className="profile-link">
              Address Book
            </Link>
            <Link tom="#" className="profile-link">
              My Payment Options
            </Link>
          </div>
          <div className="profile-section">
            <div className="profile-section-title">My Orders</div>
            <a href="#" className="profile-link">
              My Returns
            </a>
            <a href="#" className="profile-link">
              My Cancellations
            </a>
          </div>
          <div className="profile-section">
            <div className="profile-section-title">My WishList</div>
            <a href="#" className="profile-link">
              My WishList
            </a>
          </div>
        </nav>
      </aside>
      <main className="profile-main">
        <form className="profile-form">
          <h2 className="profile-form-title">Edit Your Profile</h2>
          <div className="profile-row">
            <div className="profile-field">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="profile-field">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="profile-row">
            <div className="profile-field">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="profile-field">
              <label>Address</label>
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div className="profile-password-title">Password Changes</div>
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />
          <div className="profile-actions">
            <button type="button" className="profile-cancel">
              Cancel
            </button>
            <button type="submit" className="profile-save">
              Save Changes
            </button>
          </div>
        </form>
      </main>
      <style>{`
										.profile-mobile-categories {
											display: flex;
											overflow-x: auto;
											gap: 12px;
											padding: 12px 8px 20px 8px;
											margin-bottom: 20px;
											border-bottom: 1px solid #e0e0e0;
											scrollbar-width: none;
											position: sticky;
											top: 0;
											left: 0;
											width: 100vw;
											background: #fff;
											box-sizing: border-box;
										}
										.profile-mobile-categories::-webkit-scrollbar {
											display: none;
										}
										.profile-mobile-link {
											white-space: nowrap;
											padding: 8px 16px;
											border-radius: 20px;
											text-decoration: none;
											color: #333;
											background-color: #f5f5f5;
											font-size: 15px;
											transition: background-color 0.2s, color 0.2s;
											flex-shrink: 0;
										}
										.profile-mobile-link.active,
										.profile-mobile-link:hover {
											background-color: #DB4444;
											color: #fff;
										}
										@media (min-width: 901px) {
											.profile-mobile-categories { display: none; }
										}
				.profile-menu-icon {
					display: none;
					background: #fff;
					border: 1.5px solid #e0e0e0;
					border-radius: 8px;
					padding: 8px 12px;
					margin-bottom: 18px;
					margin-left: 8px;
					cursor: pointer;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					z-index: 200;
				}
				.profile-menu-bar {
					display: block;
					width: 28px;
					height: 3.5px;
					background: #222;
					margin: 4px 0;
					border-radius: 2px;
				}
				@media (max-width: 900px) {
					.profile-menu-icon {
						display: flex;
						position: relative;
					}
					.profile-sidebar.closed {
						left: -100vw !important;
					}
					.profile-sidebar.open {
						left: 0 !important;
						box-shadow: 0 2px 16px rgba(0,0,0,0.13);
					}
				}
				.profile-container {
					display: flex;
					flex-direction: row;
					min-height: 100vh;
					background: #fff;
					justify-content: center;
					align-items: center;
					padding: 48px 0;
					box-sizing: border-box;
          gap:100

				}
				.profile-sidebar {
					width: 240px;
					background: #fff;
					border-radius: 12px;
					box-shadow: 0 2px 12px rgba(0,0,0,0.07);
					margin-right: 32px;
					padding: 40px 0 40px 32px;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
				}
				.profile-section {
					margin-bottom: 32px;
				}
				.profile-section-title {
					font-weight: 600;
					font-size: 15px;
					margin-bottom: 12px;
					color: #222;
				}
				.profile-link {
					display: block;
					color: #888;
					text-decoration: none;
					font-weight: 500;
					font-size: 15px;
					margin-bottom: 8px;
					padding: 8px 16px;
					border-radius: 8px;
					transition: color 0.18s, background 0.18s;
				}
				.profile-link.active {
					color: #e74c3c;
					background: none;
					border-left: 3px solid #e74c3c;
					padding-left: 12px;
				}
				.profile-main {
					flex: 1;
					background: #fff;
					border-radius: 12px;
					box-shadow: 0 2px 12px rgba(0,0,0,0.07);
					padding: 40px 48px;
					display: flex;
					flex-direction: column;
					align-items: center;
					max-width: 600px;
				}
				.profile-form {
					width: 100%;
				}
				.profile-form-title {
					font-weight: 700;
					font-size: 24px;
					margin-bottom: 32px;
					color: #e74c3c;
					text-align: left;
				}
				.profile-row {
					display: flex;
					gap: 24px;
					margin-bottom: 20px;
				}
				.profile-field {
					flex: 1;
				}
				.profile-field label {
					font-weight: 600;
					font-size: 15px;
					margin-bottom: 8px;
					display: block;
					color: #222;
				}
				.profile-field input {
					width: 100%;
					padding: 10px 14px;
					border-radius: 8px;
					border: 1px solid #e0e0e0;
					margin-bottom: 4px;
					background: #f8f8f8;
					outline: none;
					transition: border 0.18s;
				}
				.profile-field input:focus {
					border-color: #e74c3c;
				}
				.profile-password-title {
					font-weight: 700;
					font-size: 16px;
					margin: 32px 0 12px;
					color: #222;
				}
				.profile-form input[type="password"] {
					width: 100%;
					padding: 10px 14px;
					border-radius: 8px;
					border: 1px solid #e0e0e0;
					margin-bottom: 12px;
					background: #f8f8f8;
					outline: none;
					transition: border 0.18s;
				}
				.profile-form input[type="password"]:focus {
					border-color: #e74c3c;
				}
				.profile-actions {
					display: flex;
					gap: 16px;
					justify-content: flex-end;
					margin-top: 8px;
				}
				.profile-cancel {
					background: #f3f3f3;
					color: #888;
					border: none;
					border-radius: 8px;
					padding: 10px 24px;
					font-weight: 600;
					font-size: 15px;
					cursor: pointer;
					box-shadow: 0 2px 8px rgba(0,0,0,0.04);
					transition: background 0.2s;
				}
				.profile-save {
					background: #e74c3c;
					color: #fff;
					border: none;
					border-radius: 8px;
					padding: 10px 24px;
					font-weight: 600;
					font-size: 15px;
					cursor: pointer;
					box-shadow: 0 2px 8px rgba(231,76,60,0.08);
					transition: background 0.2s;
				}
				@media (max-width: 900px) {
					.profile-container {
						flex-direction: column;
						padding: 16px 5;
					}
					.profile-sidebar {
						width: 100%;
						margin-right: 0;
						margin-bottom: 24px;
						padding: 24px 12px;
						border-radius: 12px;
						box-shadow: none;
						align-items: flex-start;
					}
					.profile-main {
						padding: 18px 8px;
						max-width: 100vw;
						border-radius: 12px;
					}
					.profile-row {
						flex-direction: column;
						gap: 12px;
					}
					.profile-actions {
						flex-direction: column;
						gap: 8px;
						justify-content: stretch;
					}
				}
			`}</style>
    </div>
  );
}

export default Profile;
// Cleared for rewrite
