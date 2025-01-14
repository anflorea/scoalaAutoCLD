import React from 'react';
import { Strings } from '~/config/Strings';
import { useFeature } from 'flagged';

const NecessaryDocuments = () => {
  const darkTheme = useFeature('darkTheme');
  const classicHeader = useFeature('classicHeader');

  const enrollmentDetails = [
    {
      title: 'Act de identitate sau permis de conducere',
    },
    {
      title: 'Vârsta minimă înscriere:',
      list: [
        'Categoria A: 20 sau cu 3 luni inainte ani daca cursantul detin permis categoria A2 de cel putin 2 ani, altfel 24 ani sau cu 3 luni inainte',
        'Categoria A2: 18 ani sau cu 3 luni inainte',
        'Categoria A1: 16 ani sau cu 3 luni inainte',
        'Categoria B Manuală: 18 ani sau cu 3 luni inainte',
        'Categoria B Automată: 18 ani sau cu 3 luni inainte',
        'Categoria B1: 16 ani sau cu 3 luni inainte',
        'Categoriile BE si B96: 18 ani',
        'Categoria C: 18 ani',
        'Categoria CE: 18 ani',
        'Categoria Tr: 18 ani',
      ],
    },
    {
      title: 'Cazier Judiciar',
      list: [
        'Cazierul se poate ridica de la Inspectoratul Județean de Poliție Târgu Mureș (Str. Borsos Tamás 16)',
      ],
    },
    {
      title: 'Analize medicale',
      // desc: 'Analizele se pot face la Clinia My Health (Bd. 1 Decembrie 1918, 11-13)',
      list: [
        'Este necesară adeverință de la medicul de familie',
        'Rezultatul se eliberează pe loc',
        'Pentru persoanele minore este necesară adeverință de la medicul neuro-pediatru',
        'Aviz psihologic',
      ],
    },
    {
      title: 'Taxă permis auto',
      // desc: [
      //   'Se achită la sediul școlii sau la bancă',
      //   'În funcție de categoria permisului, taxa este:',
      // ],
      // list: [
      //   'Categoria B: 100 RON',
      //   'Categoria B1: 100 RON',
      //   'Categoria B Cutie Automată: 100 RON',
      //   'Categoria C: 100 RON',
      //   'Categoria CE: 100 RON',
      // ],
    },
  ];

  const renderBulletItem = (element) => {
    if (Array.isArray(element)) {
      return (
        <ul id="necessaryDocuments">
          {element.map((value) => {
            return renderBulletItem(value);
          })}
        </ul>
      );
    }
    return (
      <li className={'mb-0 ' + (darkTheme ? 'text-white' : '')}>{element}</li>
    );
  };

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((value) => {
        return (
          <p className={'mb-0 ' + (darkTheme ? 'text-white' : '')}>{value}</p>
        );
      });
    }

    return (
      <p className={'mb-0 ' + (darkTheme ? 'text-white' : '')}>{description}</p>
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
              'text-24 text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            {Strings.necessaryDocuments.backgroundTitle}
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {Strings.necessaryDocuments.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5 col-10 mx-auto">
          {/* Enrollment */}
          <div
            className={'p-4 textJustify' + (darkTheme ? 'rounded bg-dark' : '')}
          >
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
        </div>
      </div>
    </section>
  );
};

export default NecessaryDocuments;
