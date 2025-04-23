import Blogpage from "../../assets/images/blog.JPG"
import Personal from "../../assets/images/personal.JPG"
import Band from "../../assets/images/band.JPG"
import Dicee from "../../assets/images/dice.JPG"
import Drum from "../../assets/images/drum.JPG"
import Simon from "../../assets/images/simon.JPG"
import ShowStage from "../../assets/images/showstage.png"
import g4e from "../../assets/images/g4e.png"
import "./Projects.scss"
import { Button } from "antd"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Projects(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      };

    const projects=[
        { title:"Show Stage"            ,picture:ShowStage  ,source:"https://app.showstage.in"},
        { title:"Go4Explore"            ,picture:g4e        ,source:"https://www.go4explore.com"},
        { title:"Blog Page"             ,picture:Blogpage   ,source:"https://github.com/asrivastav722/Blog-page"},
        { title:"Personal Site"         ,picture:Personal   ,source:"https://github.com/asrivastav722/Personal-Site"},
        { title:"Band Name Generator"   ,picture:Band       ,source:"https://github.com/asrivastav722/Band-Name-Generator"},
        { title:"The Dicee Game"        ,picture:Dicee      ,source:"https://asrivastav722.github.io/The-Dicee-Game/"},
        { title:"Drum Kit"              ,picture:Drum       ,source:"https://asrivastav722.github.io/Drum-Kit/"},
        { title:"Simon Game"            ,picture:Simon      ,source:"https://asrivastav722.github.io/Simon-Game/"}
    ]

    return <><section class="d-none d-lg-flex  overflow-x-scroll hidescrollbar h-100 p-3 w-100 gap-3 align-items-center row-gap-0 flex-wrap justify-center">
            {projects.map((val,i)=>{
                return <a href={val.source} 
                        className="projectcard box-shadow position-relative" 
                        style={{backgroundImage:`url(${val?.picture})`}}>
                            <div className="roboto text-white hoverbox p-2 w-100 position-absolute">
                                {val.title}
                            </div>
                            <div className="flex-col align-items-center justify-center redirect position-absolute h-100 w-100">
                                <Button className="roboto bg-slate-400">View Source</Button>
                                
                            </div>
                        </a>})}
            </section>
    <section class="d-flex d-lg-flex h-100 p-3 w-100 ">
    <Slider {...settings}>
            {projects.map((val,i)=>{
                return <a href={val.source} 
                        className="projectcard box-shadow position-relative" 
                        style={{backgroundImage:`url(${val.picture})`}}>
                            <div className="roboto text-white hoverbox p-2 w-100 position-absolute">
                                {val.title}
                            </div>
                            <div className="flex-col align-items-center justify-center redirectmobile position-absolute h-100 w-100">
                                <Button className="roboto bg-slate-400">
                                    View Source
                                </Button>
                            </div>
                        </a>})}
                        </Slider>

            </section>
            </>
}