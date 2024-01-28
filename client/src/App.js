import NavBar from './components/layout/NavBar/NavBar'
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Resume from './components/pages/Resume/Resume';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import Container from './components/common/Container/Container';
import Stars from './components/features/Stars/Stars';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      <Stars />
      <NavBar />
      <Container>
        <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
        }}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default App;