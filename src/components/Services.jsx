import React from 'react';
import { Strings } from '~/config/Strings';

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: 'Instruire Practică',
      desc: 'Oferim ore de condus de cea mai bună calitate alături de instructori experimentați pregătiți să te ghideze prin toate aspectele conducerii automobilelor.',
      icon: 'fa-solid fa-road-circle-check fa-lg',
    },
    {
      name: 'Pregătire Teoretică',
      desc: 'Efectuarea unui instructaj teoretic complet in vederea promovarii examenului teoretic, impreuna cu lectii de prim ajutor.',
      icon: 'fa-solid fa-file-circle-check fa-lg',
    },
    {
      name: 'Program Flexibil',
      desc: 'Indiferent de cât de aglomerat este programul tău, suntem aici să te ajutăm să îți atingi obiectivele de conducere. Putem să adaptăm orele de studiu în funcție de nevoile tale.',
      icon: 'fa-solid fa-calendar-check fa-lg',
    },
    {
      name: 'Întocmirea Dosarului',
      desc: 'Noi suntem pregătiți pentru a te ghida prin întregul proces, oferidu-ți informațiile și sfaturile necesare pentru a vă pregăti dosarul într-un mod eficient și corect.',
      icon: 'fa-solid fa-file-signature fa-lg',
    },
    {
      name: 'Flotă modernă',
      desc: 'Oferim o flotă de autovehicule moderne și fiabile. Mașinile noastre sunt echipate cu tehnologii de actualitate, astfel încât să poți avea o experiență sigură și confortabilă.',
      icon: 'fa-solid fa-car-side fa-lg',
    },
    {
      name: 'Preț avantajos',
      desc: 'Oferim un preț avantajos și competitiv pentru orele de conducere și studiu. Suntem dedicați să vă oferim o experiență de învățare accesibilă și de calitate.',
      icon: 'fa-solid fa-piggy-bank fa-lg',
    },
  ];

  return (
    <section
      id="services"
      className={'section ' + (darkTheme ? 'bg-dark-2' : 'bg-light')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-white-50  opacity-1' : 'text-light  opacity-4')
            }
          >
            {Strings.services.backgroundTitle}
          </h2>
          <p
            className={
              'text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {Strings.services.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5 mx-1 textJustify ">
                      <div
                        className={
                          'featured-box-icon text-primary shadow-sm rounded ' +
                          (darkTheme ? 'bg-dark-1' : 'bg-white')
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? 'text-white' : ''}>
                        {service.name}
                      </h3>
                      <p
                        className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
