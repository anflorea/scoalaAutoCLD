import React from 'react';
import Typewriter from 'typewriter-effect';
import { Strings } from '~/config/Strings';
import { useFeatures } from 'flagged';

const Home = ({ handleNavClick }) => {
  const { registerSection } = useFeatures();

  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-1 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          style={{ backgroundColor: '#1E3C56' }}
        >
          <img
            className="topGraphicElement"
            alt=""
            src={'images/home/TopLeftOrange.svg'}
          />
          <img
            className="botGraphicElement"
            alt=""
            src={'images/home/BottomRightOrange.svg'}
          />
           <img
          className="dotsGraphic"
          alt=""
          src={'images/home/Graphic3.svg'}
          />
          <img
            className="roundPicture pic1position"
            alt=""
            src={'images/home/picture1.png'}
          />
          <img
            className="roundPicture pic2position"
            alt=""
            src={'images/home/picture2.png'}
          />
          <img
            className="roundPicture pic3position"
            alt=""
            src={'images/home/picture3.png'}
          />
          <img
          className="plusGraphic"
          alt=""
          src={'images/home/Graphic4.svg'}
          />
          <img
          className="plusGraphic2"
          alt=""
          src={'images/home/Graphic4.svg'}
          />
          <img
          className="plusGraphic3"
          alt=""
          src={'images/home/Graphic4.svg'}
          />
        </div>

        {/* -------------------video background---------------------- */}

        {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                  {Strings.home.welcome}
                </p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: Strings.home.rollingStrings,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">{Strings.home.motto}</p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    if (registerSection) {
                      handleNavClick('register');
                    } else handleNavClick('contact');
                  }}
                >
                  {registerSection
                    ? Strings.home.callToAction
                    : 'Contactează-ne acum'}
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
