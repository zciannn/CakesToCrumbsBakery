
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import { useEffect } from 'react';

import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import OurCakes from './pages/OurCakes.jsx';

function ScrollToLocation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Website() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToLocation />

      {pathname === '/' ? (
        <div className="homepage-gradient">
          <Navbar />
          <Home />
        </div>
      ) : (
        <>
          <div className="inner-header">
            <Navbar />
          </div>

          <Routes>
            <Route
              path="/our-cakes"
              element={<OurCakes />}
            />
          </Routes>
        </>
      )}

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
}
