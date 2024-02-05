import { useCallback } from "react";
import "./HeaderBox.css";

const HeaderBox = () => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <section className="header-box">
      <div className="text-container">
        <div className="discoverourimpactonwatchhub-parent">
          <b className="discoverourimpactonwatchhub1">
            <span>{`Are you a Business `}</span>
            <span className="owner">Owner</span>
            <span className="span">?</span>
          </b>
          <div className="elevate-your-business">
            Elevate your business, unleash your potential. Together, let's craft
            the path to success.
          </div>
          <button className="primary-cta2" onClick={onPrimaryCTAClick}>
            <div className="hover3" />
            <b className="cta2">Let’s work together</b>
          </button>
        </div>
        <div className="group-container">
          <div className="screenshot">
            <div className="discover-our-impact-frame1">
              <div className="bg1" />
              <img
                className="screenshot-icon"
                loading="eager"
                alt=""
                src="/screenshot@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBox;
