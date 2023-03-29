import '~/App.scss';
import Header from '~/components/Header';
import Home from '~/components/Home';
import AboutUs from '~/components/About';
import Services from '~/components/Services';
import NecessaryDocuments from '~/components/NecessaryDocuments';
import Curriculum from '~/components/Curriculum';
import Testimonials from '~/components/Testimonials';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import { useEffect, useState } from 'react';
import ClassicHeader from '~/components/ClassicHeader';
import TermsAndConditions from '~/components/TermsAndConditions';
import GDPR from '~/components/GDPR';
import PreLoader from '~/components/Preloader';
import { Tooltip } from '~/components/Tooltip';
import Register from '~/components/Register';
import { FlagsProvider, useFeatures } from 'flagged';

function App() {
  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById('back-to-top');

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  const AppContent = () => {
    const { darkTheme, classicHeader, testimonialsSection, registerSection } =
      useFeatures();

    return (
      <div
        style={{ position: 'relative' }}
        className={classicHeader ? '' : 'side-header'}
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          {classicHeader ? (
            <ClassicHeader handleNavClick={handleNavClick}></ClassicHeader>
          ) : (
            <Header handleNavClick={handleNavClick}></Header>
          )}

          <div id="content" role="main">
            <Home handleNavClick={handleNavClick}></Home>
            <AboutUs />
            <Services />
            <NecessaryDocuments />
            <Curriculum />
            {testimonialsSection && <Testimonials />}
            {registerSection && <Register />}
            <Contact />
          </div>
          <Footer handleNavClick={handleNavClick}></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? 'inline' : 'none' }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>

        <TermsAndConditions darkTheme={darkTheme}></TermsAndConditions>
        <GDPR darkTheme={darkTheme}></GDPR>
      </div>
    );
  };

  return (
    <FlagsProvider
      features={{
        classicHeader: true,
        darkTheme: false,
        testimonialsSection: true,
        registerSection: true,
      }}
    >
      <AppContent />
    </FlagsProvider>
  );
}

export default App;
