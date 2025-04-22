import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import navData from "./NavBar/NavData"
import { useState } from "react";
import "./Layout.scss"
import { motion } from 'framer-motion';


const Layout = () => {
  
  const [location,setLocation] = useState(window.location.pathname);
  
  
  return <><div className="homeDesktop text-white darkbg d-none d-lg-flex">
            <div className="navbarContainerDesktop darkbg"><NavBar setLocation={setLocation} location={location} navData={navData}/></div>
            <div className="bodyDesktop">

              <div className="headerContainerDesktop darkbg"><Header location={location} setLocation={setLocation} navData={navData}/></div>
    
              <div className="pageDesktop darkbg">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }} 
                    className="pages darkbg">
                      <Outlet/>
                  </motion.div>
                </div>
            </div>
          </div>

          <div className="homeMobile d-lg-none text-white darkbg">
            <motion.div className="pages darkbg">
              <Outlet/>
            </motion.div>
          <div className="navbarContainerMobile">
            <NavBar setLocation={setLocation} location={location} navData={navData}/>
          </div>
        </div>
        </>


        
};
export default Layout;