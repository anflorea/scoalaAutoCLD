import React from 'react';
import { Strings } from '~/config/Strings';
import { useFeature } from 'flagged';

const AboutUs = () => {
  const darkTheme = useFeature('darkTheme');
  const classicHeader = useFeature('classicHeader');
  return (
    <section id="about" className={'section ' + (darkTheme ? 'bg-dark-1' : '')}>
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            {Strings.about.backgroundTitle}
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {Strings.about.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="textJustify">
            <h2
              className={
                'text-7 fw-600 mb-3 ' + (darkTheme ? 'text-white' : '')
              }
            >
              Noi suntem{' '}
              <span className="text-primary">{Strings.index.title}</span>
            </h2>
            <p className={darkTheme ? 'text-white-50' : ''}>
              Suntem o echipă de profesioniști dedicată să oferim o experiență
              de învățare excelentă și sigură pentru viitorii șoferi. Cu
              instructori pasionați și încrezători, suntem aici pentru a-ți
              oferi cele mai bune cursuri de conducere personalizate.
            </p>
            <p className={darkTheme ? 'text-white-50' : ''}>
              Cu o istorie de un an, suntem o școală de șoferi tânără și
              dinamică, de încredere și respectată în comunitatea noastră.
              Echipa noastră este formată din instructori experimentați și bine
              pregătiți, iar toate mașinile noastre sunt echipate cu cele mai
              noi tehnologii de siguranță.
            </p>
            <p className={darkTheme ? 'text-white-50' : ''}>
              Nu rata ocazia de a te înscrie într-unul dintre cursurile noastre
              de conducere interactive și antrenante! Suntem aici pentru a te
              ajuta să devii un șofer sigur și responsabil. Indiferent de
              obiectivele tale de învățare sau de nivelul tău de experiență ca
              șofer, vom lucra împreună pentru a-ți oferi instruirea și ghidarea
              necesare pentru a obține permisul de conducere.
            </p>
            <p className={darkTheme ? 'text-white-50 ' : 'fw-600 text-primary'}>
              Suntem aici pentru a te aduce pe cel mai scurt drum spre un condus
              in siguranță!
            </p>
            {/* <p className={darkTheme ? 'text-white-50' : ''}>
              Vă mulțumim pentru interesul acordat școlii noastre de șoferi și
              vă invităm să ne contactați pentru mai multe informații și pentru
              a vă înscrie într-unul dintre cursurile noastre. Suntem aici
              pentru a vă ajuta să vă atingeți obiectivele de conducere și să
              deveniți un șofer sigur și responsabil.
            </p> */}
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          {/* <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  'list-style-2 ' +
                  (darkTheme ? 'list-style-light text-light' : '')
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Simone Olivia
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">chat@simone.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>28
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Los Angeles,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div> */}
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            'brands-grid separator-border mt-5 ' +
            (darkTheme ? 'separator-border-light' : '')
          }
        >
          <div className="row">
            <div className="col-6 col-md-4">
              <div className="featured-box text-center">
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>{Strings.about.statistics.yearsExperience.value}</span>+
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  {Strings.about.statistics.yearsExperience.title}
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="featured-box text-center">
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>{Strings.about.statistics.happyClients.value}</span>+
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  {Strings.about.statistics.happyClients.title}
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="featured-box text-center">
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>{Strings.about.statistics.serviceTime.value}</span>+
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  {Strings.about.statistics.serviceTime.title}
                </p>
              </div>
            </div>
            {/* <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>38</span>
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  Get Awards
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
