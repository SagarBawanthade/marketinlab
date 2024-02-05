import { useCallback } from "react";
import "./Text1.css";

const Text1 = () => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <section className="text1">
      <div className="phone-input-frame">
        <div className="rectangle-parent">
          <div className="rectangle">
            <b className="title">
              <span>Discover Our Impact on</span>
              <span className="watchhub"> Watchhub</span>
            </b>
            <div className="facebookadsturning135weekin">
              <span>
                <span className="this-case-study">{`This case study demonstrates how we turned `}</span>
                <b className="week">$135/week</b>
                <span className="into">{` into `}</span>
                <b className="in-sales">$1,500 in sales</b>
                <span className="using-targeted-facebook">
                  {" "}
                  using targeted Facebook ads. Without complex SEO or influencer
                  marketing, we optimized our campaign for maximum conversions,
                  showcasing effective, straightforward advertising strategies.
                </span>
              </span>
            </div>
          </div>
          <button className="primary-cta1" onClick={onPrimaryCTAClick}>
            <div className="hover2" />
            <b className="cta1">{`Get started  `}</b>
          </button>
        </div>
        <div className="hero-page">
          <div className="bg" />
          <img
            className="screenshot-2023-11-06-at-551"
            loading="eager"
            alt=""
            src="/screenshot-20231106-at-551-3@2x.png"
          />
        </div>
      </div>
      <div className="logos-1280px">
        <div className="line" />
        <img
          className="logos-icon"
          loading="eager"
          alt=""
          src="/logos@2x.png"
        />
        <div className="line1" />
      </div>
    </section>
  );
};

export default Text1;
