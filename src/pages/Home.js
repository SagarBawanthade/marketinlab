import { useCallback } from "react";
import Text1 from "../components/Text1";
import HeaderBox from "../components/HeaderBox";
import Group from "../components/Group";
import ContactInfo from "../components/ContactInfo";
import ImpactDiscoverFrame from "../components/ImpactDiscoverFrame";
import BusinessLinkFrame from "../components/BusinessLinkFrame";
import SecondaryCTA from "../components/SecondaryCTA";
import FrameP from "../components/FrameP";
import PrivacyPolicyCookiesPolicy from "../components/PrivacyPolicyCookiesPolicy";
import FrameComponent from "../components/FrameComponent";
import "./Home.css";

const Home = () => {
  const onSecondaryCTA1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-saas&utm_medium=figma-samples"
    );
  }, []);

  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="home">
      <div className="wallet-logo">
        <div className="frame" />
        <div className="wallet">Wallet</div>
      </div>
      <header className="discover-our-impact-frame">
        <img
          className="untitled-design-1"
          loading="eager"
          alt=""
          src="/untitled-design-1@2x.png"
        />
        <div className="text">
          <button className="secondary-cta-1" onClick={onSecondaryCTA1Click}>
            <div className="hover" />
            <div className="log-in">Contact Us</div>
          </button>
        </div>
      </header>
      <Text1 />
      <HeaderBox />
      <section className="call-to-action-button">
        <Group />
        <div className="cta-1280px-main">
          <ContactInfo />
          <ImpactDiscoverFrame />
          <div className="website-domain-field">
            <div className="industry-selector-frame">
              <div className="pointer-highlight">
                <div className="call-to-action-label">
                  <b className="discoverourimpactonwatchhub">
                    <span>{`Our `}</span>
                    <span className="work">Work</span>
                  </b>
                  <div className="explore-our-portfolio">
                    Explore our portfolio to see how our innovative solutions
                    drive growth for clients worldwide. Each project reflects
                    our commitment to excellence and strategic expertise in the
                    digital realm.
                  </div>
                </div>
              </div>
              <b className="tech-team-folio-container">
                <p className="tech-team">Tech Team</p>
                <p className="folio">Folio.</p>
              </b>
            </div>
            <button className="primary-cta" onClick={onPrimaryCTAClick}>
              <div className="hover1" />
              <div className="cta">{`Get started  `}</div>
            </button>
          </div>
        </div>
        <BusinessLinkFrame />
      </section>
      <SecondaryCTA />
      <FrameP />
      <PrivacyPolicyCookiesPolicy />
      <FrameComponent />
    </div>
  );
};

export default Home;
