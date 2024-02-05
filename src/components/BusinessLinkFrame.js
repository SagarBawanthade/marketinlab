import { useCallback } from "react";
import "./BusinessLinkFrame.css";

const BusinessLinkFrame = () => {
  const onPrimaryCTAClick = useCallback(() => {
    window.open(
      "https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="business-link-frame">
      <div className="input-area-frame">
        <div className="discoverourimpactonwatchhub-wrapper">
          <b className="discoverourimpactonwatchhub3">What We Provide?</b>
        </div>
        <div className="frame-group">
          <div className="frame-wrapper">
            <div className="our-services-cover-the-full-sp-parent">
              <div className="our-services-cover-container">
                <p className="our-services-cover">
                  Our services cover the full span of design and development.
                </p>
                <p className="by-carrying-out">
                  By carrying out extensive user research up front, we
                  prioritize the right features and
                </p>
                <p className="save-you-money">save you money.</p>
              </div>
              <button className="primary-cta6" onClick={onPrimaryCTAClick}>
                <div className="hover7" />
                <div className="cta6">{`Get started  `}</div>
              </button>
            </div>
          </div>
          <div className="frame-container">
            <div className="ads-wrapper">
              <div className="ads">
                <div className="ads-child" />
                <img
                  className="folded-booklet-icon"
                  loading="eager"
                  alt=""
                  src="/folded-booklet@2x.png"
                />
                <div className="ads-parent">
                  <div className="ads1">ADS</div>
                  <div className="we-run-all-types-of-google-ads-parent">
                    <div className="we-run-all">
                      We run all types of google ads as well as social media ads
                      which will derive great results in the form of leads and
                      sales
                    </div>
                    <div className="phone-input-frame1" />
                    <div className="phone-input-frame2" />
                    <div className="your-phone-number" />
                    <div className="sort-down-button" />
                    <div className="header-group" />
                  </div>
                  <div className="text-frame" />
                </div>
              </div>
            </div>
            <div className="audience-analytics">
              <div className="line2" />
              <img
                className="circle-chart-icon"
                loading="eager"
                alt=""
                src="/circle-chart@2x.png"
              />
              <div className="frame1" />
              <div className="text2" />
              <div className="instance">
                <div className="audience-analytics1">AUDIENCE ANALYTICS</div>
                <div className="rectangle1">
                  <div className="audience-analytics-is">
                    Audience Analytics is very important in every aspect of
                    marketing without knowing your right audience you cant do it
                  </div>
                  <div className="text3" />
                  <div className="frame2" />
                  <div className="frame3" />
                  <div className="frame4" />
                </div>
              </div>
            </div>
            <div className="instance1">
              <div className="brand-and-strategy">
                <textarea
                  className="brand-and-strategy-child"
                  rows={10}
                  cols={17}
                />
                <div className="puzzle-wrapper">
                  <img
                    className="puzzle-icon"
                    loading="eager"
                    alt=""
                    src="/puzzle@2x.png"
                  />
                </div>
                <div className="brand-and-strategy-parent">
                  <div className="brand-and-strategy1">BRAND AND STRATEGY</div>
                  <div className="we-have-really-great-team-of-d-parent">
                    <div className="we-have-really">{`We have really great team of designers for branding designs & strategy building through content ideas`}</div>
                    <div className="frame-child" />
                    <div className="frame-item" />
                    <div className="frame-inner" />
                    <div className="additional-c-t-a" />
                    <div className="footer" />
                  </div>
                </div>
                <div className="call-to-action-frame" />
              </div>
              <div className="funnel-marketing">
                <textarea className="text4" rows={10} cols={17} />
                <img
                  className="envelope-icon"
                  loading="eager"
                  alt=""
                  src="/envelope@2x.png"
                />
                <div className="text5">
                  <div className="primary-c-t-a1">
                    <div className="funnel-marketing1">{`FUNNEL MARKETING `}</div>
                    <div className="top-header" />
                  </div>
                  <div className="impact-section">
                    <div className="vital-for-gathering">
                      vital for gathering genuine data and converting your
                      target audience into customers
                    </div>
                    <div className="top-header1" />
                    <div className="main-frame" />
                    <div className="divider-line" />
                    <div className="contact-section" />
                    <div className="impact-section-child" />
                  </div>
                </div>
              </div>
              <div className="marketing-consulation">
                <div className="marketing-consulation-child" />
                <img
                  className="customer-insight-icon"
                  loading="eager"
                  alt=""
                  src="/customer-insight@2x.png"
                />
                <div className="frame-div">
                  <div className="marketing-consultation-parent">
                    <div className="marketing-consultation">{`MARKETING CONSULTATION `}</div>
                    <div className="ellipse-div" />
                  </div>
                  <div className="we-offer-marketing-consultatio-parent">
                    <div className="we-offer-marketing">
                      We offer marketing consultations for brands aiming at
                      exponential growth
                    </div>
                    <div className="frame-child1" />
                    <div className="frame-child2" />
                    <div className="frame-child3" />
                    <div className="frame-child4" />
                    <div className="frame-child5" />
                  </div>
                </div>
              </div>
              <div className="seo">
                <textarea className="rectangle-frame" rows={10} cols={17} />
                <img
                  className="analytics-icon"
                  loading="eager"
                  alt=""
                  src="/analytics@2x.png"
                />
                <div className="frame5" />
                <div className="frame-parent1">
                  <div className="seo-parent">
                    <div className="seo1">SEO</div>
                    <div className="rectangle2" />
                  </div>
                  <div className="text6">
                    <div className="seo-is-the">
                      SEO is the key factor for any brand to succeed. SEO is one
                      of the great tool for organic growth. want to know more
                      about SEO
                    </div>
                    <div className="text7" />
                    <div className="text8" />
                    <div className="frame6" />
                    <div className="instance2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle3">
              <div className="social-media-management">
                <div className="i-n-s-t-a-n-c-e" />
                <img
                  className="instagram-icon"
                  loading="eager"
                  alt=""
                  src="/instagram@2x.png"
                />
                <div className="t-e-x-t" />
                <div className="social-meadia-management-parent">
                  <div className="social-meadia-management">
                    SOCIAL MEADIA MANAGEMENT
                  </div>
                  <div className="primary-c-t-a2">
                    <div className="we-have-really1">
                      We have really good experience in social media management
                      because we already handled our own brands
                    </div>
                    <div className="line3" />
                    <div className="line4" />
                    <div className="textframe" />
                    <div className="frame7" />
                    <div className="discover-our-impact" />
                  </div>
                </div>
              </div>
              <div className="web-development">
                <div className="bookacallnow" />
                <img
                  className="monitor-icon"
                  loading="eager"
                  alt=""
                  src="/monitor@2x.png"
                />
                <div className="unlock-your-business-potential">
                  <div className="your-company-name">
                    <div className="web-development1">{`WEB DEVELOPMENT `}</div>
                    <div className="business-category" />
                  </div>
                  <div className="phone">
                    <div className="we-believe-a">
                      We believe a well-designed website sets your business
                      apart, attracting more customers
                    </div>
                    <div className="sort-down" />
                    <div className="sort-down1" />
                    <div className="connectwithusto-upscaleyour-bu" />
                    <div className="privacypolicy-cookiespolicy-te" />
                    <div className="inputtext" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLinkFrame;
