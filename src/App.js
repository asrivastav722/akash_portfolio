import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./Layout/Layout";
import About from './Pages/Dashboard/Dashboard';
// import Abstract from './Pages/Abstract';
import Courseworks from './Pages/Courseworks/Courseworks';
import Education from './Pages/Education/Education';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const location = useLocation();

  const HomeRoutes={
    // "/abstract":<Abstract/>,
    "/contact":<Contact/>,
    "/cousework":<Courseworks/>,
    "/education":<Education/>,
    "/projects":<Projects/>,
    "/skills":<Skills/>,
    "/experience":<Experience/>,
    "/contactme":<Contact/>
  }


  return (
    <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Layout />
        }>
          <Route index element={<About/>} />
            {Object.keys(HomeRoutes).map((key) => (
              <Route key={key} path={key} element={HomeRoutes[key]}/>
            ))}
          </Route>
      </Routes>
      </AnimatePresence>
  );
}

export default App;