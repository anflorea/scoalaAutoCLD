import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import CurriculumModal from './CurriculumModal';
import { Strings } from '~/config/Strings';
import { useFeature } from 'flagged';

const Curriculum = () => {
  const darkTheme = useFeature('darkTheme');
  const classicHeader = useFeature('classicHeader');

  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*');
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    A: Strings.curriculum.menu.categories.catA,
    B: Strings.curriculum.menu.categories.catB,
    TRAILORS: Strings.curriculum.menu.categories.trailors,
    PROFESSIONAL: Strings.curriculum.menu.categories.professionalDrivers,
  };

  const projectsData = [
    {
      ...Strings.curriculum.classes.catA,
      projectInfo:
        'Cu permisul de conducere categoria A poti conduce motociclete cu sau fara atas si tricicluri cu motor cu puterea de peste 15 kW.',
      thumbImage: 'images/cars/CatA_thumb.jpg',
      sliderImages: [
        'images/cars/CatA_1.jpg',
        'images/cars/CatA_2.jpg',
      ],
      categories: [filters.A.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catA1,
      projectInfo:
        'Motociclete din categoria A1 fara atas, cu o putere a motorului de maximum 11 kw si cu un raport putere/greutate de cel mult 0,1 kw/kg, care poate atinge o viteza de cel putin 90 km/h;',
      thumbImage: 'images/cars/CatA1_thumb.jpg',
      // sliderImages: [
      //   'images/cars/CatA_1.jpg',
      // ],
      categories: [filters.A.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catA2,
      projectInfo:
        'Motociclete categoria A2 cu puterea motorului maxima de 35 kw, cu un raport putere/greutate care nu depaseste 0,2 kw/kg. si care nu sunt derivate dintr-un vehicul avand mai mult de dublul puterii sale. ',
      thumbImage: 'images/cars/CatA2_thumb.jpg',
      sliderImages: [
        'images/cars/CatA2_1.jpg',
        'images/cars/CatA2_2.jpg',
      ],
      categories: [filters.A.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catAM,
      projectInfo:
        'Cu permis AM poti conduce vehicule categoria AM - scuter / moped, cu doua, trei sau patru roti, a carui viteza maxima prin constructie este mai mare de 25 km/h dar nu depaseste 45 km/h. Vehicul care este echipat cu un motor cu ardere interna, cu aprindere prin scanteie, cu o capacitate cilindrica ce nu depaseste 50 cm3 sau cu un alt motor cu ardere interna ori, dupa caz, electric, a carui putere nominala continua maxima nu depaseste 4 kW, iar masa proprie a vehiculului nu depaseste 350 kg, neincluzand masa bateriilor in cazul vehiculului electric. Este asimilat mopedului cvadriciclul usor sau triciclul cu motor care pastreaza caracteristicile acestuia.',
      thumbImage: 'images/cars/CatAM_thumb.jpg',
      // sliderImages: [
      //   'images/cars/CatB_1.jpg',
      // ],
      categories: [filters.A.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catA125,
      projectInfo:
        'Cursul A 125 ofera posibilitatea posesorilor de permis categoria B de a conduce o motocicleta  de maxim 125 cc dotata cu transmisie automata. Cursul include 10 ore de conducere si nu necesita examen.',
      thumbImage: 'images/cars/CatA125_thumb.jpg',
      sliderImages: [
        'images/cars/CatA125_1.jpg',
        'images/cars/CatA125_2.jpg',
      ],
      categories: [filters.A.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catB,
      projectInfo:
        'Autovehiculul a carui masă totala maxima autorizata nu depaseste 3.500 Kg si al carui numar de locuri pe scaun, in afara conducatorului, nu este mai mare de 8.',
      thumbImage: 'images/cars/CatB_thumb.jpg',
      sliderImages: [
        'images/cars/CatB_1.jpg',
        'images/cars/CatB_2.jpg',
        'images/cars/CatB_3.jpg',
        'images/cars/CatB_4.jpg',
        'images/cars/CatB_5.jpg',
        'images/cars/CatB_6.jpg',
        'images/cars/CatB_7.jpg',
        'images/cars/CatB_8.jpg',
        'images/cars/CatB_9.jpg',
      ],
      categories: [filters.B.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catBE,
      projectInfo:
        'Ansamblul format dintr-un vehicul din categoria B si o remorca sau semiremorca - Ansamblul de vehicule a caror masa totala maxima autorizata depaseste 4.250 kg format dintr-un autovehicul tragator din categoria B si o remorca sau semiremorca a carei masa totala maxima autorizata nu depaseste 3.500 kg.',
      thumbImage: 'images/cars/CatBE_thumb.jpg',
      // sliderImages: [
      //   'images/cars/CatB_1.jpg',
      // ],
      categories: [filters.TRAILORS.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catB96,
      projectInfo:
        'Acest permis este necesar pentru a conduce un ansamblu de vehicule format dintr-un autovehicul tragator din categoria B si o remorca, a carui masa maxima autorizata este mai mare de 3500 kg, dar nu depaseste 4250 kg. ',
      thumbImage: 'images/cars/CatB96_thumb.jpg',
      // sliderImages: [
      //   'images/cars/CatB_1.jpg',
      // ],
      categories: [filters.TRAILORS.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.AutomaticCatB,
      projectInfo:
        'Autovehiculul a carui masa totala maxima autorizata nu depaseste 3.500 Kg si al carui numar de locuri pe scaun, in afara conducatorului, nu este mai mare de 8, iar transmisia este cu cutie automată. Ulterior promovării examenului, deținătorul permisului având dreptul de a conduce doar autovehicule cu cutie automată.',
      thumbImage: 'images/cars/CatBAut_thumb.jpg',
      sliderImages: [
        'images/cars/CatBAut_1.jpg',
        'images/cars/CatBAut_2.jpg',
        'images/cars/CatBAut_3.jpg',
        'images/cars/CatBAut_4.jpg',
      ],
      categories: [filters.B.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catB1,
      projectInfo:
        'Cvadriciclurile și triciclurile, autovehiculele cu trei sau patru roți, care au masă proprie de peste 400 kg, însă nu mai mare de 550 kg. Aceste mașini sunt echipate cu motor cu ardere internă, a carui capacitate cilindrică este mai mare de 45 cmc sau cu orice alt motor care oferăo putere echivalentă ori cu viteză prin construcție mai mare de 50 km/h.',
      thumbImage: 'images/cars/CatB1_thumb.jpg',
      sliderImages: [
        'images/cars/CatB1_1.jpg',
        'images/cars/CatB1_2.jpg',
        'images/cars/CatB1_3.jpg',
      ],
      categories: [filters.B.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catC,
      projectInfo:
        'Autovehiculul a carui masă totala maxima autorizata este mai mare de 3500 Kg si care este proiectat pentru transportul a maximum 8 pasageri.',
      thumbImage: 'images/cars/CatC_thumb.jpg',
      // sliderImages: [
      //   'images/cars/SoferiProfesionisti.png',
      //   'images/cars/SoferiProfesionisti.png',
      // ],
      categories: [filters.PROFESSIONAL.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catE,
      projectInfo:
        'Ansamblu format dintr-un autovehicul tragator din categoria C si o remorcă a carei masa totala maxima autorizata este mai mare de 750 Kg.',
      thumbImage: 'images/cars/CatCE_thumb.jpg',
      sliderImages: ['images/cars/CatCE_1.jpg'],
      categories: [filters.PROFESSIONAL.replace(/\s+/g, ''), filters.TRAILORS.replace(/\s+/g, '')],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.portfolio-filter', {
      itemSelector: '.filter-item',
      layoutMode: 'masonry',
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({
            filter: `.${filterKey.replace(/\s+/g, '')}`,
          });
    }
  }, [filterKey, imagesLoaded]);

  const replaceWithBr = (string) => {
    return string.replace(/\n/g, '<br />');
  };

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={'section ' + (darkTheme ? 'bg-dark-2' : 'bg-light')}
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
              {Strings.curriculum.backgroundTitle}
            </h2>
            <p
              className={
                'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
                (darkTheme ? 'text-white' : 'text-dark')
              }
            >
              {' '}
              {Strings.curriculum.mainTitle}
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              'portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 ' +
              (darkTheme ? 'nav-light' : '')
            }
          >
            <li className="nav-item">
              <button
                className={'nav-link ' + (filterKey === '*' ? 'active' : '')}
                onClick={handleFilterKeyChange('*')}
              >
                {Strings.curriculum.menu.categories.all}
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    'nav-link ' +
                    (filterKey === filters[oneKey] ? 'active' : '')
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      'col-sm-6 col-lg-4 filter-item ' +
                      project.categories.join(' ')
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          style={{ aspectRatio: 3 / 2 }}
                          src={project.thumbImage}
                          alt="Categorie permis conducere"
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5
                              dangerouslySetInnerHTML={{
                                __html: replaceWithBr(project.title),
                              }}
                              className="text-white fw-600 fs-3 lh-base textShadow"
                            />
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <CurriculumModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></CurriculumModal>
      </div>
    </>
  );
};

export default Curriculum;
