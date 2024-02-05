import { useCallback } from "react";
import FrameComponent1 from "./FrameComponent1";
import "./PrivacyPolicyCookiesPolicy.css";

const PrivacyPolicyCookiesPolicy = () => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <form className="privacy-policy-cookies-policy">
      <b className="discoverourimpactonwatchhub7">Fill The Form!</b>
      <div className="contact-form-header">
        <div className="have-questions-about">
          Have questions about pricing, plans, or our Awesome Product? Fill out
          the form and a sales representative will be in touch shortly.
        </div>
        <div className="question-form-frame">
          <FrameComponent1
            name1="Name"
            frame2Placeholder=" Enter name here.."
          />
          <FrameComponent1
            name1="Email"
            frame2Placeholder="Your Email.."
            propFlex="unset"
            propPadding="0px var(--padding-5xs)"
          />
          <div className="frame-parent3">
            <div className="phone-wrapper">
              <b className="phone1">{`Phone `}</b>
            </div>
            <div className="rectangle15-5-parent">
              <div className="rectangle15-5" />
              <img className="sortdown-icon" alt="" src="/sortdown@2x.png" />
              <input
                className="yourphonenumber"
                placeholder="Your Phone Number .."
                type="text"
              />
            </div>
          </div>
          <div className="companyname-parent">
            <b className="companyname">{`Company Name `}</b>
            <input
              className="frame-child6"
              placeholder="Enter Your Company Name .."
              type="text"
            />
          </div>
          <div className="companydomain-parent">
            <b className="companydomain">{`Company Domain `}</b>
            <input
              className="frame-child7"
              placeholder="Business Category"
              type="text"
            />
          </div>
        </div>
      </div>
      <button className="primary-cta7" onClick={onPrimaryCTAClick}>
        <div className="hover8" />
        <div className="cta7">{`Get started  `}</div>
      </button>
    </form>
  );
};

export default PrivacyPolicyCookiesPolicy;
