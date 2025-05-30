import { Button } from "antd"
import "./Header.scss"
import { useNavigate } from "react-router-dom"

export default function Header({location,setLocation,navData,...props}){

  const navigate=useNavigate();
    
    function ontoggleMenu(val){
        navigate(val)
        setLocation(window.location.pathname)
    }

  return  <header className=" px-10 d-flex justify-between w-100 align-items-center">

            <p className="m-0 p-0 darktext text-uppercase roboto text-2xl">{navData.map((value)=>{return value.path===location && value.name})}</p>

            <div className="d-flex gap-4">

              {location!=="/contact" && <Button 
              className=" contact blue  roboto " 
              onClick={()=>{ontoggleMenu("/contact")}} 
           
              >
              Contact Me</Button>}
            
              <a className="text-decoration-none" href="https://drive.google.com/file/d/1Bmx3KHsSjFJfX1pxlHmwTLPloWc6mHCR/view?usp=sharing"><Button className="getres darkfg text-white  roboto">View Resume</Button></a>
            
            </div>
          </header>
}