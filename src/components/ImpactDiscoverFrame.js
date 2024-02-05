import { useCallback } from "react";
import "./ImpactDiscoverFrame.css";

const ImpactDiscoverFrame = () => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="impact-discover-frame">
      <div className="market-lab-logo-tag">
        <div className="contact-phone-frame">
          <b className="marketing-folio">
            <p className="marketing">Marketing</p>
            <p className="folio2">Folio.</p>
          </b>
          <button className="primary-cta5" onClick={onPrimaryCTAClick}>
            <div className="hover6" />
            <div className="cta5">{`Get started  `}</div>
          </button>
        </div>
      </div>
      <img
        className="screenshot-2023-11-06-at-5511"
        alt=""
        src="/screenshot-20231106-at-551-3@2x.png"
      />
    </div>
  );
};

export default ImpactDiscoverFrame;
