import React from 'react';
import { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Link } from 'react-scroll';
import { Strings } from '~/config/Strings';
import { commonConfig } from '~/config/commonConfig';
import { useFeatures } from 'flagged';

const ClassicHeader = ({ handleNavClick }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const { testimonialsSection, registerSection } = useFeatures();

  const checkScrollTop = () => {
    let header = document.getElementsByClassName('primary-menu');

    if (header) {
      if (
        document.body.scrollTop > 858 ||
        document.documentElement.scrollTop > 858
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Navbar */}
      <nav
        className={
          'primary-menu navbar navbar-expand-lg navbar-dark border-bottom-0 sticky-top ' +
          (stickyHeader ? 'sticky-on secondaryColorBG ' : 'secondaryColorBG ')
        }
        // style
      >
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2">
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: 'pointer' }}
              className="logo"
              to="home"
              title="scoala-auto-cld"
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              <img
                src="images/logo-light.png"
                alt="Școala Auto CLD"
                style={{
                  margin: 15,
                  maxWidth: 110,
                  height: 'auto',
                }}
              />
            </Link>
            {/* Logo End */}
          </div>
          <div className="col col-lg-8 navbar-accordion">
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose);
              }}
              className={
                isNavModalClose
                  ? 'navbar-toggler ms-auto'
                  : 'navbar-toggler ms-auto show'
              }
              id="navbar-toggler"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                isNavModalClose
                  ? 'collapse navbar-collapse justify-content-center '
                  : 'show navbar-collapse justify-content-center'
              }
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="home"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {Strings.header.home}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {Strings.header.about}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {Strings.header.services}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="necessaryDocuments"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {Strings.header.resume}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {Strings.header.portfolio}
                  </Link>
                </li>
                {testimonialsSection && (
                  <li className="nav-item">
                    <Link
                      smooth
                      duration={500}
                      style={{ cursor: 'pointer' }}
                      spy
                      activeClass="active"
                      className="nav-link"
                      to="testimonial"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsNavModalClose(true);
                      }}
                    >
                      {Strings.header.testimonials}
                    </Link>
                  </li>
                )}
                {registerSection && (
                  <li className="nav-item">
                    <Link
                      smooth
                      duration={500}
                      style={{ cursor: 'pointer' }}
                      spy
                      activeClass="active"
                      className="nav-link"
                      to="register"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsNavModalClose(true);
                      }}
                    >
                      {Strings.header.register}
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {Strings.header.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end">
            <ul className="social-icons social-icons-light">
              <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href={commonConfig.socialMediaAccunts.facebookURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default ClassicHeader;
