import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { Strings } from '~/config/Strings';
import { useFeatures } from 'flagged';

import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from './Tooltip';
import { commonConfig } from '~/config/commonConfig';

const Contact = () => {
  const { darkTheme, classicHeader, testimonialsSection, registerSection } =
    useFeatures();

  const backgroundColorPicker = () => {
    if (testimonialsSection !== registerSection) {
      return darkTheme ? 'bg-dark-2' : 'bg-light';
    }
    return darkTheme ? 'bg-dark-1' : '';
  };

  return (
    <section id="contact" className={'section ' + backgroundColorPicker()}>
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            {Strings.contact.backgroundTitle}
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {' '}
            {Strings.contact.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                'mb-3 text-5 text-uppercase ' + (darkTheme ? 'text-white' : '')
              }
            >
              {Strings.contact.header}
            </h2>
            <p className={'text-3 mb-1 ' + (darkTheme ? 'text-light' : '')}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-map-location-dot contactIcon" />
              </span>
              {Strings.contact.info.streetAndNumber}
            </p>
            <p className={'text-3 mb-1 ' + (darkTheme ? 'text-light' : '')}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-city contactIcon" />
              </span>
              {Strings.contact.info.cityAndRegion}
            </p>
            <p className={'text-3 mb-1 ' + (darkTheme ? 'text-light' : '')}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope contactIcon" />
              </span>
              {Strings.contact.info.email}
            </p>
            <p className={'text-3 mb-1 ' + (darkTheme ? 'text-light' : '')}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone contactIcon" />
              </span>
              {Strings.contact.info.mainPhoneNumber}
            </p>
            <p className={'text-3 mb-4 ' + (darkTheme ? 'text-light' : '')}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone contactIcon" />
              </span>
              {Strings.contact.info.secondaryPhoneNumber}
            </p>
            {/* <p className={'text-3 mb-4 ' + (darkTheme ? 'text-light' : '')}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              chat@simone.com
            </p> */}
            <h2
              className={
                'mb-3 text-5 text-uppercase ' + (darkTheme ? 'text-white' : '')
              }
            >
              {Strings.contact.followUs}
            </h2>
            <ul
              className={
                'social-icons justify-content-center justify-content-md-start ' +
                (darkTheme ? 'social-icons-muted' : '')
              }
            >
              {/* <li className="social-icons-dribbble">
                <Tooltip text="Dribbble" placement="top">
                  <a
                    href="http://www.dribbble.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                  <a
                    href="https://twitter.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Tooltip>
              </li> */}
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
              {/* <li className="social-icons-google">
                <Tooltip text="Google" placement="top">
                  <a
                    href="http://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-google" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="http://www.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li> */}
            </ul>
          </div>
          {/* map integration */}
          <div className="col-md-8 col-xl-9 order-0 order-md-1 rounded overflow-hidden p-0">
            <div class="mapWrapper">
              <div class="mapWrapper">
                <iframe
                  title="embedded-map"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  src={commonConfig.mapSource}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
