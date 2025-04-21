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

export default function Projects(){

    const projects=[
        { title:"Show Stage"            ,picture:ShowStage  ,link:"https://app.showstage.in"},
        { title:"Go4Explore"            ,picture:g4e        ,link:"https://www.go4explore.com"},
        { title:"Blog Page"             ,picture:Blogpage   ,link:"https://github.com/asrivastav722/Blog-page"},
        { title:"Personal Site"         ,picture:Personal   ,link:"https://github.com/asrivastav722/Personal-Site"},
        { title:"Band Name Generator"   ,picture:Band       ,link:"https://github.com/asrivastav722/Band-Name-Generator"},
        { title:"The Dicee Game"        ,picture:Dicee      ,link:"https://asrivastav722.github.io/The-Dicee-Game/"},
        { title:"Drum Kit"              ,picture:Drum       ,link:"https://asrivastav722.github.io/Drum-Kit/"},
        { title:"Simon Game"            ,picture:Simon      ,link:"https://asrivastav722.github.io/Simon-Game/"}
    ]

    return <section class="overflow-x-scroll hidescrollbar h-100 p-3 w-100 d-flex gap-3 align-items-center row-gap-0 flex-wrap justify-center">
            {projects.map((val,i)=>{
                return <a href={val.link} 
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
}