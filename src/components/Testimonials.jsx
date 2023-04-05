import React from 'react';

import Slider from 'react-slick';
import { Strings } from '~/config/Strings';
import { useFeature } from 'flagged';

const Testimonials = () => {
  const darkTheme = useFeature('darkTheme');
  const classicHeader = useFeature('classicHeader');

  const reviews = [
    {
      name: 'Hoffmann Isa',
      date: '09 Ianuarie 2023',
      src: 'images/testimonial/client-sm-1.jpeg',
      desc: 'Mulțumesc pentru tot! Recomand cu încredere școala de șoferi CLD. Am avut parte de o pregătire foarte bună alături de instructori amabili, calmi, înțelegători și profesioniști în domeniu. Cu ajutorul lor am obținut permisul de conducere cu succes!',
      rating: 5,
    },
    {
      name: 'Mirela Antonescu',
      date: '31 Decembrie 2022',
      src: 'images/testimonial/client-sm-2.jpeg',
      desc: 'Recomand cu încredere această școală de șoferi! Am avut parte de instructori cu un grad mare de profesionalism, cu multă răbdare și pasiune în munca depusă, care m-au ajutat să obțin permisul de conducere fără nicio problemă.',
      rating: 5,
    },
    {
      name: 'Rodica Radu',
      date: '07 Mai 2020',
      src: 'images/testimonial/client-sm-3.jpeg',
      desc: 'Îi mulțumesc mult instructorului meu, Cosmin Olariu, care a fost răbdător cu mine, m-a îndrumat și mi-a dat sfaturi despre cum să fiu un șofer adevărat. Este un om "jos pălăria" și un instructor care iubește ceea ce face!',
      rating: 5,
    },
    {
      name: 'Bone Olaru Ana Maria',
      date: '16 Noiembrie 2019',
      src: 'images/testimonial/client-sm-4.jpeg',
      desc: 'Nota 10! Pot să spun cu încredere că instructorul Cosmin Olariu este unul dintre cei mai buni instructori de conducere cu care am avut ocazia să lucrez. Este un profesionist desăvârșit și un om cu un mare simț al răspunderii.',
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
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
            {Strings.testimonials.backgroundTitle}
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {' '}
            {Strings.testimonials.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    ' rounded p-5 ' + (darkTheme ? 'bg-dark' : 'bg-light')
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block testimonialProfilePic"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          'd-block fw-600 ' +
                          (darkTheme ? 'text-white' : 'text-dark')
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500"> {value.date} </span>
                    </p>
                  </div>
                  <p
                    className={
                      ' fw-500 mb-4 textJustify ' + (darkTheme ? 'text-white' : 'text-dark')
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
