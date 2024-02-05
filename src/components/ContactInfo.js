import { useCallback } from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  const onPrimaryCTA1Click = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="contact-info">
      <div className="primary-c-t-a">
        <b className="discoverourimpactonwatchhub2">
          <span>{`Our `}</span>
          <span className="work1">Work</span>
        </b>
      </div>
      <div className="call-to-action">
        <div className="explore-our-portfolio1">
          Explore our portfolio to see how our innovative solutions drive growth
          for clients worldwide. Each project reflects our commitment to
          excellence and strategic expertise in the digital realm.
        </div>
      </div>
      <div className="frame-parent">
        <div className="designers-folio-parent">
          <b className="designers-folio">
            <p className="designers">Designers</p>
            <p className="folio1">Folio.</p>
          </b>
          <button className="primary-cta4" onClick={onPrimaryCTA1Click}>
            <div className="hover5" />
            <div className="cta4">{`Get started  `}</div>
          </button>
        </div>
        <div className="text-input-frame">
          <div className="wrapper-untitled-design-4">
            <img
              className="untitled-design-4"
              loading="eager"
              alt=""
              src="/untitled-design-4@2x.png"
            />
          </div>
          <div className="wrapper-untitled-design-5">
            <img
              className="untitled-design-5"
              loading="eager"
              alt=""
              src="/untitled-design-5@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
