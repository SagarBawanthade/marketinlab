import { useCallback } from "react";
import "./Group.css";

const Group = () => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="group">
      <div className="bg2" />
      <div className="contact-form-frame">
        <img className="star-icon" loading="eager" alt="" />
        <div className="wrapper-intro-photo">
          <img className="intro-photo-icon" alt="" src="/intro-photo.svg" />
        </div>
      </div>
      <div className="input-frame-set-wrapper">
        <div className="input-frame-set">
          <div className="phone-number-input-frame">
            <b className="hi-im-prathamesh-container">
              <span>{`Hi, I'm `}</span>
              <span className="prathamesh-mane">Prathamesh Mane</span>
              <span>{` `}</span>
            </b>
            <div className="input-box">
              <div className="a-seasoned-performance">
                A seasoned Performance Marketer and WordPress Developer,
                steering the ship as the CEO of MarketingLab. My expertise lies
                in crafting dynamic online strategies and creating robust,
                user-friendly websites to drive your business forward.
              </div>
            </div>
          </div>
          <div className="line-divider">
            <button className="primary-cta3" onClick={onPrimaryCTAClick}>
              <div className="hover4" />
              <b className="cta3">Let’s work together</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
