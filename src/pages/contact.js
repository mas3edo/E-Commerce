import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // حفظ البيانات في localStorage
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    localStorage.setItem(
      "messages",
      JSON.stringify([...savedMessages, formData])
    );

    // إعادة تعيين الحقول
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    alert("Your message has been saved locally!");
  };

  return (
    <>
      <style>{`
        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 16px;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.07);
        }
        .contact-info-box {
          border-radius: 14px;
          background: #f5f5f5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          margin-bottom: 24px;
        }
        .contact-info-icon {
          background: #db4444;
          color: #fff;
          border-radius: 50%;
          padding: 10px;
          font-size: 1.3rem;
          margin-right: 12px;
        }
        .contact-form {
          border-radius: 14px;
          background: #f5f5f5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          padding: 32px 24px;
        }
        .contact-form input, .contact-form textarea {
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 10px 14px;
          margin-bottom: 16px;
          width: 100%;
          font-size: 1rem;
        }
        .contact-form button {
          background: #db4444;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 28px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: background 0.2s;
        }
        .contact-form button:hover {
          background: #b83232;
        }
        @media (max-width: 900px) {
          .contact-container {
            padding: 18px 2px;
          }
        }
      `}</style>
      <div className="contact-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          {/* Left Info */}
          <div
            style={{
              flex: "1 1 320px",
              minWidth: "260px",
              marginBottom: "24px",
            }}
          >
            <div className="contact-info-box p-4 mb-3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span className="contact-info-icon">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <h5 style={{ margin: 0 }}>Call To Us</h5>
              </div>
              <p style={{ margin: "0 0 6px 0", color: "#888" }}>
                We are available 24/7, 7 days a week.
              </p>
              <p style={{ margin: 0, color: "#888" }}>Phone: +8801611112222</p>
            </div>
            <div className="contact-info-box p-4">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span className="contact-info-icon">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <h5 style={{ margin: 0 }}>Write To Us</h5>
              </div>
              <p style={{ color: "#888", marginBottom: "8px" }}>
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p style={{ margin: "0 0 4px 0", color: "#888" }}>
                customer@exclusive.com
              </p>
              <p style={{ margin: 0, color: "#888" }}>support@exclusive.com</p>
            </div>
          </div>
          {/* Form */}
          <div style={{ flex: "2 1 400px", minWidth: "260px" }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ flex: "1 1 120px" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ flex: "1 1 120px" }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ flex: "1 1 120px" }}
                />
              </div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{ marginBottom: "16px" }}
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
