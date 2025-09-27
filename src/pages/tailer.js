import React from "react";

function Tailer() {
  return (
    <div className="tailer-hero">
      <div className="tailer-hero-left">
        <span className="tailer-hero-category">Categories</span>
        <h1 className="tailer-hero-title">
          Enhance Your
          <br />
          Music Experience
        </h1>
        <div className="tailer-hero-countdown">
          <div className="tailer-hero-count-item">
            <span className="tailer-hero-count-num">23</span>
            <span className="tailer-hero-count-label">Hours</span>
          </div>
          <div className="tailer-hero-count-item">
            <span className="tailer-hero-count-num">05</span>
            <span className="tailer-hero-count-label">Days</span>
          </div>
          <div className="tailer-hero-count-item">
            <span className="tailer-hero-count-num">59</span>
            <span className="tailer-hero-count-label">Minutes</span>
          </div>
          <div className="tailer-hero-count-item">
            <span className="tailer-hero-count-num">35</span>
            <span className="tailer-hero-count-label">Seconds</span>
          </div>
        </div>
        <button className="tailer-hero-btn">Buy Now!</button>
      </div>
      <div className="tailer-hero-right">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
          alt="Modern Speaker"
          className="tailer-hero-img"
        />
      </div>
      <style>{`
				.tailer-hero {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #111;
					border-radius: 8px;
					padding: 32px 32px 32px 40px;
					min-height: 300px;
					margin: 24px auto;
					max-width: 900px;
					box-shadow: 0 4px 32px rgba(0,0,0,0.13);
				}
				.tailer-hero-left {
					display: flex;
					flex-direction: column;
					justify-content: center;
					flex: 1.2;
					min-width: 220px;
				}
				.tailer-hero-category {
					color: #00ff5a;
					font-size: 1.1rem;
					font-weight: 600;
					margin-bottom: 10px;
				}
				.tailer-hero-title {
					color: #fff;
					font-size: 2.2rem;
					font-weight: 800;
					margin-bottom: 22px;
					line-height: 1.18;
				}
				.tailer-hero-countdown {
					display: flex;
					gap: 16px;
					margin-bottom: 28px;
				}
				.tailer-hero-count-item {
					background: #222;
					border-radius: 50%;
					width: 56px;
					height: 56px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					color: #fff;
					box-shadow: 0 2px 8px rgba(0,0,0,0.13);
				}
				.tailer-hero-count-num {
					font-size: 1.25rem;
					font-weight: 700;
				}
				.tailer-hero-count-label {
					font-size: 0.78rem;
					color: #aaa;
				}
				.tailer-hero-btn {
					margin-top: 8px;
					background: #00ff5a;
					color: #111;
					border: none;
					border-radius: 6px;
					padding: 13px 38px;
					font-size: 1.1rem;
					font-weight: 700;
					cursor: pointer;
					box-shadow: 0 2px 8px rgba(0,255,90,0.13);
					transition: background 0.18s, color 0.18s;
				}
				.tailer-hero-btn:hover {
					background: #00d94c;
					color: #fff;
				}
				.tailer-hero-right {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.tailer-hero-img {
					max-width: 320px;
					width: 100%;
					height: auto;
					border-radius: 12px;
					box-shadow: 0 2px 18px rgba(0,0,0,0.18);
				}
				@media (max-width: 900px) {
					.tailer-hero {
						flex-direction: column;
						padding: 24px 10px 24px 10px;
						min-height: unset;
					}
					.tailer-hero-left {
						align-items: center;
						text-align: center;
					}
					.tailer-hero-right {
						margin-top: 18px;
					}
				}
				@media (max-width: 600px) {
					.tailer-hero {
						padding: 12px 2vw;
						border-radius: 6px;
					}
					.tailer-hero-title {
						font-size: 1.18rem;
					}
					.tailer-hero-count-item {
						width: 38px;
						height: 38px;
						font-size: 0.93rem;
					}
					.tailer-hero-btn {
						padding: 9px 0;
						width: 100%;
						font-size: 0.97rem;
						border-radius: 8px;
					}
					.tailer-hero-img {
						max-width: 180px;
						border-radius: 7px;
					}
				}
			`}</style>
    </div>
  );
}

export default Tailer;
