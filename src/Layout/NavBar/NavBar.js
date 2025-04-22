import Transformers from "../../assets/images/pngegg.png"
import { Button,Tooltip } from "antd"
import { useNavigate } from "react-router-dom"
import "./NavBar.scss"

export default function NavBar({navData,location,setLocation,...props}){
    
    const navigate=useNavigate();
    
    function ontoggleMenu(val){
        navigate(val.path)
        setLocation(window.location.pathname)
    }
     
    return <><div className="h-100 w-100 flex-col gap-4 justify-center d-none d-lg-flex">
                
                {/* <img className="position-absolute top-2 left-1" height={"40px"} src={Transformers} alt="Logo" /> */}
        
                <div className="d-flex flex-col roboto align-items-center gap-3">
                    
                    {navData.map((val,i)=>{
                        return navData.length !== i+1 && <Tooltip placement="right" color="rgba(255, 8, 8, 0.94)" title={val.name}>
                                    
                                    <Button style={{height:"fit-content",width:"fit-content"}} onClick={()=>{ontoggleMenu(val)}} type="text" className={`${val.path===location?`darkfg selected`:null} p-2 align-items-center justify-center d-flex flex-col rounded-full navbtn`}>
                                    
                                        {val.logo}
                                    
                                    </Button>
                                
                                </Tooltip>})}
                </div>
           
            </div>
            <div className="navbarbg position-relative w-100 d-flex align-items-center flex-col gap-4 justify-center d-lg-none darkbg">
                
            {/* <img className="position-absolute top-2 left-1" height={"40px"} src={Transformers} alt="Logo" /> */}
    
            <div className="d-flex position-absolute roboto align-items-center rounded-3xl justify-center w-80 bottom-3 p-2 darkbg gap-1 boxshadowblack">
                
                {navData.map((val,i)=>{
                    return i<4 && 
                                
                                <Button 
                                style={{height:"fit-content",width:"fit-content"}} onClick={()=>{ontoggleMenu(val)}} 
                                type="text" 
                                className={`${val.path===location?`darkfg selectedmobile`:null} 
                                p-2 basis-1/4 roboto text-white align-items-center justify-center d-flex rounded-full navbtnmobile`}>
                                
                                    {val.logo}
                                    {val.path===location&&val.name}
                                </Button>
                            
                            })}
            </div>
       
        </div></>
}
