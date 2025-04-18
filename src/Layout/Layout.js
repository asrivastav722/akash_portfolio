import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import navData from "./NavBar/NavData"
import { useState } from "react";
import "./Layout.scss"

const Layout = () => {
  
  const [location,setLocation]=useState(window.location.pathname);
  
  return <div className="home text-white darkbg">

            <div className="navbarContainerDesktop darkbg"><NavBar setLocation={setLocation} location={location} navData={navData}/></div>

            <div className="bodyDesktop ">

              <div className="headerContainerDesktop darkbg"><Header location={location} setLocation={setLocation} navData={navData}/></div>
    
              <div className="pageDesktop darkfg">
                <div className="pages darkbg"><Outlet/></div>
                </div>
            </div>
          
          </div>
};
export default Layout;