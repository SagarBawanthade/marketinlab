import "./SecondaryCTA.css";

const SecondaryCTA = () => {
  return (
    <section className="secondary-c-t-a">
      <div className="parent-frame-x">
        <div className="child-frame-a">
          <b className="discoverourimpactonwatchhub4">What We are Good At?</b>
        </div>
        <div className="frame-c">
          <div className="we-work-with-container">
            <p className="we-work-with">
              We work with small to large Fintech, SaaS businesses around the
              world.
            </p>
            <p className="while-we-can">{`While we can serve any industry, our expertise includes E-Commerce, Small & Medium Enterprise`}</p>
            <p className="blank-line">&nbsp;</p>
            <p className="our-ideal-client">
              Our ideal client (hopefully you) wants to make development
              decisions based on real research, data, and testing.
            </p>
          </div>
          <div className="frame-e">
            <div className="line-f">
              <button className="lets-work-together-button">
                <div className="lets-work-together-button-child" />
                <div className="fintech">Fintech</div>
              </button>
              <button className="lets-work-together-button1">
                <div className="lets-work-together-button-item" />
                <div className="saas">SAAS</div>
              </button>
              <div className="text-i">
                <div className="text-j">
                  <img
                    className="untitled-design-6"
                    alt=""
                    src="/untitled-design-6@2x.png"
                  />
                  <button className="lets-work-together-button2">
                    <div className="lets-work-together-button-inner" />
                    <div className="e-commerce">E-Commerce</div>
                  </button>
                </div>
                <button className="lets-work-together-button3">
                  <div className="rectangle-div" />
                  <div className="small-medium">{`Small & Medium Enterprises`}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTA;
