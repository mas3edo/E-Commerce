import React from "react";

function Tailer() {
  return (
    <div className="tailer-hero">
      {/* Image always on top, text always below, for all screens */}
      <div className="tailer-hero-right">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Music Experience"
          className="tailer-hero-img"
        />
      </div>
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
      <style>{`
						.tailer-hero {
							display: flex;
							direction: rtl;
							align-items: center;
							justify-content: flex-start;
							background: #111;
							border-radius: 18px;
							padding: 3vw 3vw 3vw 4vw;
							min-height: 340px;
							margin: 2vw auto;
							width: 94%;
							box-shadow: 0 4px 32px rgba(0,0,0,0.13);
							gap: 24px;
						}
						.tailer-hero-left {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							width: 100%;
							min-width: 220px;
							text-align: center;
						}
				.tailer-hero-category {
					color: #00ff5a;
					font-size: 1.25rem;
					font-weight: 600;
					margin-bottom: 12px;
				}
				.tailer-hero-title {
					color: #fff;
					font-size: 3.2rem;
					font-weight: 800;
					margin-bottom: 28px;
					line-height: 1.13;
				}
				.tailer-hero-countdown {
					display: flex;
					gap: 2vw;
					margin-bottom: 32px;
				}
				.tailer-hero-count-item {
					background: #222;
					border-radius: 50%;
					width: 70px;
					height: 70px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					color: #fff;
					box-shadow: 0 2px 8px rgba(0,0,0,0.13);
				}
				.tailer-hero-count-num {
					font-size: 1.45rem;
					font-weight: 700;
				}
				.tailer-hero-count-label {
					font-size: 0.93rem;
					color: #aaa;
				}
				.tailer-hero-btn {
					margin-top: 12px;
					background: #00ff5a;
					color: #111;
					border: none;
					border-radius: 10px;
					padding: 18px 48px;
					font-size: 1.35rem;
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
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-bottom: 18px;
						}
						.tailer-hero-img {
							max-width: 520px;
							width: 100%;
							height: auto;
							border-radius: 18px;
							box-shadow: 0 2px 18px rgba(0,0,0,0.18);
						}
						@media (max-width: 1200px) {
							.tailer-hero {
								max-width: 98vw;
								padding: 2vw 2vw 2vw 2vw;
							}
							.tailer-hero-title {
								font-size: 2.1rem;
							}
							.tailer-hero-img {
								max-width: 340px;
							}
							.tailer-hero-count-item {
								width: 48px;
								height: 48px;
								font-size: 1rem;
							}
						}
						@media (max-width: 600px) {
							.tailer-hero {
								padding: 7px 1vw;
								border-radius: 7px;
								min-height: unset;
								gap: 8px;
								flex-direction: column;
							}
							.tailer-hero-right {
								margin-bottom: 8px;
							}
							.tailer-hero-img {
								max-width: 90vw;
								min-width: 70px;
								border-radius: 7px;
								margin: 0 auto;
							}
							.tailer-hero-title {
								font-size: 1.08rem;
								margin-bottom: 14px;
							}
							.tailer-hero-countdown {
								gap: 7px;
								margin-bottom: 16px;
								justify-content: center;
							}
							.tailer-hero-count-item {
								width: 28px;
								height: 28px;
								font-size: 0.7rem;
							}
							.tailer-hero-count-num {
								font-size: 0.8rem;
							}
							.tailer-hero-count-label {
								font-size: 0.6rem;
							}
							.tailer-hero-btn {
								padding: 7px 0;
								width: 100%;
								font-size: 0.85rem;
								border-radius: 7px;
							}
						}
			`}</style>
    </div>
  );
}

export default Tailer;
