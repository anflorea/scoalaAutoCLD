import React from 'react';
import { Strings } from '~/config/Strings';
// import resumeFile from '../documents/resume.pdf';

const NecessaryDocuments = ({ classicHeader, darkTheme }) => {
  const enrollmentDetails = [
    {
      title: 'Act de identitate sau permis de conducere',
      desc: 'Vârsta minimă înscriere:',
      list: [
        'Categoria B Manuală: 17 ani și 9 luni',
        'Categoria B Automată: 17 ani și 9 luni',
        'Categoria B1: 17 ani și 9 luni',
        'Categoria C: 20 ani și 9 luni',
        'Categoria CE: 21 ani',
      ],
    },
    {
      title: 'Analize medicale',
      desc: 'Analizele se pot face la Clinia My Health (Bd. 1 Decembrie 1918, 11-13)',
      list: [
        'Este necesară adeverință de la medicul de familie',
        'Nu se recoltează proba de sânge',
        'Rezultatul se eliberează pe loc',
        'Persoanele minore pot ridica rezultatul analizei medicale, doar dacă sunt însoțite de un părinte/tutore',
      ],
    },
    {
      title: 'Aviz psihologic',
      desc: 'Examenul psihologic se face la sediul școlii.',
      list: [
        'Program: Luni - Vineri între orele 09:00 - 16:00',
        'Avizul se eliberează pe loc',
        'Cost: 50 RON',
      ],
    },
  ];

  const graduationDetails = [
    {
      title: 'Taxă permis auto',
      desc: [
        'Se achită la sediul școlii sau la bancă',
        'În funcție de categoria permisului, taxa este:',
      ],
      list: [
        'Categoria B: 100 RON',
        'Categoria B1: 100 RON',
        'Categoria B Cutie Automată: 100 RON',
        'Categoria C: 100 RON',
        'Categoria CE: 100 RON',
      ],
    },
    {
      title: 'Cazier Judiciar',
      desc: 'Cazierul se poate ridica de la Inspectoratul Județean de Poliție Târgu Mureș (Str. Borsos Tamás 16)',
    },
  ];

  const renderBulletItem = (element) => {
    if (Array.isArray(element)) {
      return (
        <ul>
          {element.map((value) => {
            return renderBulletItem(value);
          })}
        </ul>
      );
    }
    return <li>{element}</li>;
  };

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((value) => {
        return (
          <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
            {value}
          </p>
        );
      });
    }

    return (
      <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
        {description}
      </p>
    );
  };

  return (
    <section
      id="necessaryDocuments"
      className={'section ' + (darkTheme ? 'bg-dark-1' : '')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            {Strings.necessaryDocuments.backgroundTitle}
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {Strings.necessaryDocuments.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* Enrollment */}
          <div className="col-md-6 pe-5">
            <h2
              className={
                'text-6 fw-600 mb-4 ' + (darkTheme ? 'text-white' : '')
              }
            >
              {Strings.necessaryDocuments.enrollment}
            </h2>
            {enrollmentDetails.length > 0 &&
              enrollmentDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    'bg-white rounded mb-4 ' +
                    (darkTheme ? 'bg-dark' : 'bg-white')
                  }
                >
                  <h3
                    className={
                      'text-3 fw-700 ' + (darkTheme ? 'text-white' : '')
                    }
                  >
                    {value.title}
                  </h3>
                  <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
                    {renderDescription(value.desc)}
                  </p>
                  {value.list && renderBulletItem(value.list)}
                </div>
              ))}
          </div>
          {/* Graduation */}
          <div className="col-md-6 ps-05">
            <h2
              className={
                'text-6 fw-600 mb-4 ' + (darkTheme ? 'text-white' : '')
              }
            >
              {Strings.necessaryDocuments.graduation}
            </h2>
            {graduationDetails.length > 0 &&
              graduationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    'bg-white rounded mb-4 ' +
                    (darkTheme ? 'bg-dark' : 'bg-white')
                  }
                >
                  <h3
                    className={
                      'text-3 fw-700 ' + (darkTheme ? 'text-white' : '')
                    }
                  >
                    {value.title}
                  </h3>
                  <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
                    {renderDescription(value.desc)}
                  </p>
                  {value.list && renderBulletItem(value.list)}
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        {/* <h2
          className={
            'text-6 fw-600 mt-4 mb-4 ' + (darkTheme ? 'text-white' : '')
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    ' fw-500 text-start mb-2 ' +
                    (darkTheme ? 'text-light' : 'text-dark')
                  }
                >
                  {skill.name}{' '}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    'progress progress-sm mb-4 ' + (darkTheme ? 'bg-dark' : '')
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + '%' }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default NecessaryDocuments;
