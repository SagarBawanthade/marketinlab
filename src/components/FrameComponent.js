import { useCallback } from "react";
import "./FrameComponent.css";

const FrameComponent = () => {
  const onSecondaryCTA1Click = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <footer className="line-parent">
      <div className="line5" />
      <div className="update-inbox-line">
        <div className="connect-button">
          <div className="connectwithustoupscaleyourbusi">
            Connect with us to Upscale your Business!
          </div>
        </div>
        <div className="phone-input-frame3">
          <div className="wallet-logo1">
            <div className="frame8" />
            <div className="wallet1">Marketinlab</div>
          </div>
        </div>
        <div className="updates-right-to">Updates right to your Inbox</div>
      </div>
      <div className="policy-info-frame">
        <div className="text-input-field">
          <div className="privacy-policy">Privacy policy</div>
          <div className="cookies-policy">Cookies policy</div>
          <div className="terms-of-use">Terms of use</div>
        </div>
        <div className="text-frame1">
          <input
            className="text-frame2"
            placeholder="Email Address"
            type="text"
          />
          <button className="secondary-cta-11" onClick={onSecondaryCTA1Click}>
            <div className="hover9" />
            <div className="cta8">Send</div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
