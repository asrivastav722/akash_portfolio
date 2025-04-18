import "./Skills.scss"
import {ReactComponent as Html} from "../../assets/svg/Skills/Html.svg"
import {ReactComponent as Api} from "../../assets/svg/Skills/Api.svg"
import {ReactComponent as Bootstrap} from "../../assets/svg/Skills/Bootstrap.svg"
import {ReactComponent as Css} from "../../assets/svg/Skills/CSS.svg"
import {ReactComponent as Dsa} from "../../assets/svg/Skills/Dsa.svg"
import {ReactComponent as Git} from "../../assets/svg/Skills/Git.svg"
import {ReactComponent as Js} from "../../assets/svg/Skills/JavaScript.svg"
import {ReactComponent as Next} from "../../assets/svg/Skills/Next.svg"
// import {ReactComponent as Node} from "../../assets/svg/Skills/Node.svg"
import {ReactComponent as Python} from "../../assets/svg/Skills/Python.svg"
import {ReactComponent as React} from "../../assets/svg/Skills/React.svg"
import {ReactComponent as Tailwind} from "../../assets/svg/Skills/Tailwind.svg"


export default function Skills(){
    const skills=[
        { name:"HTML 5",logo:<Html/>},
        { name:"CSS 3",logo:<Css/>},
        { name:"Bootstrap",logo:<Bootstrap/>},
        { name:"Tailwind CSS",logo:<Tailwind/>},
        { name:"Python",logo:<Python/>},
        { name:"JavaScript",logo:<Js/>},
        { name:"APIs",logo:<Api/>},
        { name:"Data Structures & Algorithms",logo:<Dsa/>},
        { name:"Git /Github",logo:<Git/>},
        { name:"Next Js",logo:<Next/>},
        { name:"React",logo:<React/>}
    ]

    return <section class="px-20 h-100 w-100 d-flex align-items-center justify-center">
        
        <div class="px-20 h-70 w-100 d-flex gap-4 flex-wrap align-items-center justify-center">
            {skills.map((val)=>{
                return <div class="skillbox hovershadow rounded-xl p-3">
                {val.logo}
                <p class="roboto text-sm font-light text-wrap m-0 p-0">{val.name}</p>
            </div>
            })}
        </div>
</section>}