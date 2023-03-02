import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import ProjectDetailsModal from './ProjectDetailsModal';
import { Strings } from '~/config/Strings';

const Curriculum = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*');
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    B: Strings.curriculum.menu.categories.catB,
    PROFESSIONAL: Strings.curriculum.menu.categories.professionalDrivers,
  };

  const projectsData = [
    {
      ...Strings.curriculum.classes.catB,
      projectInfo:
        'Autovehiculul a carui masă totala maxima autorizata nu depaseste 3.500 Kg si al carui numar de locuri pe scaun, in afara conducatorului, nu este mai mare de 8.',
      thumbImage: 'images/projects/CatB.png',
      sliderImages: ['images/projects/CatB.png', 'images/projects/CatB.png'],
      categories: [filters.B.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.AutomaticCatB,
      projectInfo:
        'Autovehiculul a carui masa totala maxima autorizata nu depaseste 3.500 Kg si al carui numar de locuri pe scaun, in afara conducatorului, nu este mai mare de 8, iar transmisia este cu cutie automată. Ulterior promovării examenului, deținătorul permisului având dreptul de a conduce doar autovehicule cu cutie automată.',
      thumbImage: 'images/projects/CutieAutomata.jpeg',
      sliderImages: [
        'images/projects/CutieAutomata.jpeg',
        'images/projects/CutieAutomata.jpeg',
      ],
      categories: [filters.B.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catB1,
      projectInfo:
        'Cvadriciclurile și triciclurile, autovehiculele cu trei sau patru roți, care au masă proprie de peste 400 kg, însă nu mai mare de 550 kg. Aceste mașini sunt echipate cu motor cu ardere internă, a carui capacitate cilindrică este mai mare de 45 cmc sau cu orice alt motor care oferăo putere echivalentă ori cu viteză prin construcție mai mare de 50 km/h.',
      thumbImage: 'images/projects/CatB1.jpeg',
      sliderImages: [
        'images/projects/CatB1.jpeg',
        'images/projects/CatB1.jpeg',
      ],
      categories: [filters.B.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catC,
      projectInfo:
        'Autovehiculul a carui masă totala maxima autorizata este mai mare de 3500 Kg si care este proiectat pentru transportul a maximum 8 pasageri.',
      thumbImage: 'images/projects/SoferiProfesionisti.png',
      sliderImages: [
        'images/projects/SoferiProfesionisti.png',
        'images/projects/SoferiProfesionisti.png',
      ],
      categories: [filters.PROFESSIONAL.replace(/\s+/g, '')],
    },
    {
      ...Strings.curriculum.classes.catE,
      projectInfo:
        'Ansamblu format dintr-un autovehicul tragator din categoria C si o remorcă a carei masa totala maxima autorizata este mai mare de 750 Kg.',
      thumbImage: 'images/projects/SoferiProfesionisti2.jpeg',
      sliderImages: [
        'images/projects/SoferiProfesionisti2.jpeg',
        'images/projects/SoferiProfesionisti2.jpeg',
      ],
      categories: [filters.PROFESSIONAL.replace(/\s+/g, '')],
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
                          src={project.thumbImage}
                          alt=""
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
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Curriculum;
