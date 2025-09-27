import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Our Story */}
      <div
        className="row align-items-center mb-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            flex: "1 1 350px",
            marginBottom: "1.5rem",
            minWidth: "260px",
          }}
        >
          <h2 className="about-section-title">Our Story</h2>
          <p style={{ color: "#888", marginBottom: "0.7rem" }}>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10.5k sellers and 200 brands and serves 5 million+
            customers across the region.
          </p>
          <p style={{ color: "#888" }}>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer...
          </p>
        </div>
        <div
          style={{
            flex: "1 1 320px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Our Story"
            className="about-story-img"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {[
          { value: "10.5k", label: "Sellers active on our site" },
          { value: "33k", label: "Monthly Product Sale", highlight: true },
          { value: "45.5k", label: "Customer active on our site" },
          { value: "25k", label: "Annual gross sale on our site" },
        ].map((stat, idx) => (
          <div
            className={`about-stat-card${stat.highlight ? " bg-danger" : ""}`}
            key={idx}
          >
            <div className="about-stat-value">{stat.value}</div>
            <div className="about-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2
        className="about-section-title"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Meet Our Team
      </h2>
      <div className="about-team">
        {[
          {
            name: "Tom Cruise",
            title: "Founder & Chairman",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
          },
          {
            name: "Emma Watson",
            title: "Managing Director",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
          },
          {
            name: "Will Smith",
            title: "Product Designer",
            img: "https://randomuser.me/api/portraits/men/54.jpg",
          },
        ].map((member, idx) => (
          <div className="about-team-card" key={idx}>
            <img
              src={member.img}
              className="about-team-img"
              alt={member.name}
            />
            <div className="about-team-name">{member.name}</div>
            <div className="about-team-title">{member.title}</div>
            <div className="about-team-socials">
              <i className="bi bi-twitter" />
              <i className="bi bi-instagram" />
              <i className="bi bi-linkedin" />
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="about-features">
        {[
          {
            icon: "🚚",
            title: "Free and Fast Delivery",
            desc: "Free delivery for all orders over $140",
          },
          {
            icon: "📞",
            title: "24/7 Customer Service",
            desc: "Friendly 24/7 customer support",
          },
          {
            icon: "💰",
            title: "Money Back Guarantee",
            desc: "We return money within 30 days",
          },
        ].map((feature, idx) => (
          <div className="about-feature-card" key={idx}>
            <div className="about-feature-icon">{feature.icon}</div>
            <div className="about-feature-title">{feature.title}</div>
            <div className="about-feature-desc">{feature.desc}</div>
          </div>
        ))}
      </div>
      <style>
        {`
        
/* --- About Page Modern Styles --- */
.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 16px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.07);
}

.about-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #db4444;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.about-story-img {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(219,68,68,0.08);
}

.about-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 48px;
}
.about-stat-card {
  flex: 1 1 180px;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 32px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: center;
  transition: transform 0.2s;
}
.about-stat-card.bg-danger {
  background: #db4444;
  color: #fff;
}
.about-stat-card:hover {
  transform: translateY(-6px) scale(1.03);
}
.about-stat-value {
  font-size: 2.2rem;
  font-weight: 700;
}
.about-stat-label {
  font-size: 1rem;
  color: #888;
}

.about-team {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-bottom: 48px;
}
.about-team-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 32px 20px 24px 20px;
  text-align: center;
  width: 260px;
  transition: box-shadow 0.2s;
}
.about-team-card:hover {
  box-shadow: 0 6px 24px rgba(219,68,68,0.13);
}
.about-team-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 4px solid #db4444;
}
.about-team-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.about-team-title {
  color: #888;
  font-size: 1rem;
  margin-bottom: 12px;
}
.about-team-socials i {
  font-size: 1.3rem;
  color: #db4444;
  margin: 0 8px;
  cursor: pointer;
  transition: color 0.2s;
}
.about-team-socials i:hover {
  color: #222;
}

.about-features {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}
.about-feature-card {
  flex: 1 1 220px;
  background: #f5f5f5;
  border-radius: 14px;
  padding: 32px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: center;
  transition: transform 0.2s;
}
.about-feature-card:hover {
  transform: translateY(-4px) scale(1.02);
}
.about-feature-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}
.about-feature-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 6px;
}
.about-feature-desc {
  color: #888;
  font-size: 1rem;
}
`}
      </style>
    </div>
  );
};

export default About;
