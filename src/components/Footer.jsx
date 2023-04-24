import React from 'react';
import { Strings } from '~/config/Strings';
import { useFeatures } from 'flagged';

const Footer = ({ handleNavClick }) => {
  const { darkTheme, classicHeader, testimonialsSection, registerSection } =
    useFeatures();

  const backgroundColorPicker = () => {
    if (testimonialsSection !== registerSection) {
      return darkTheme ? 'bg-dark-2' : 'bg-light';
    }
    return darkTheme ? 'bg-dark-1' : '';
  };

  return (
    <footer id="footer" className={'section ' + backgroundColorPicker()}>
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              {Strings.footer.copyrightTitle} {''}
              <a
                href="#home"
                className="fw-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                {Strings.footer.owner}
              </a>
              . {Strings.footer.allRights}
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms-policy"
                  href="#terms-policy"
                >
                  {Strings.termsConditions.title}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#gdpr-policy"
                  href="#gdpr-policy"
                >
                  {Strings.gdpr.title}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
