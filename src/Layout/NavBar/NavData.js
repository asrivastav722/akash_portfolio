import {ReactComponent as About} from "../../assets/svg/Menulogos/About.svg"
import {ReactComponent as Courseworks} from "../../assets/svg/Menulogos/Courseworks.svg"
import {ReactComponent as Education} from "../../assets/svg/Menulogos/Education.svg"
import {ReactComponent as Portfolio} from "../../assets/svg/Menulogos/Portfolio.svg"
import {ReactComponent as Skills} from "../../assets/svg/Menulogos/Skills.svg"
import {ReactComponent as Experience} from "../../assets/svg/Menulogos/Experience.svg"


const navData=[
    {   id:1,   path:"/"            ,   name:"Dashboard"    ,logo:<About />           },
    {   id:2,   path:"/skills"      ,   name:"Skills"       ,logo:<Skills  />         },
    {   id:3,   path:"/experience"  ,   name:"Experience"   ,logo:<Experience />      },  
    {   id:4,   path:"/projects"    ,   name:"Projects"     ,logo:<Portfolio  />      },
    {   id:5,   path:"/education"   ,   name:"Education"    ,logo:<Education  />      },
    {   id:6,   path:"/cousework"   ,   name:"Courseworks"  ,logo:<Courseworks />     },
]
export default navData