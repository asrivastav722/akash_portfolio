import "./Experience.scss"
export default function Experience(){
    const experience=[
        {
            designation:"Web Developer Intern",
            organization:"CodeSoft",
            location:"Remote",
            startdate:"Aug 2023",
            enddate:"Sept 2023",
            desc:[
                <li>Collaborated on Frontend Development projects.</li>,
                <li>Gained Hands-on experience in Frontend Development and problem-solving during internship</li>,
                <li>Contributed in the development of multiple Ecommerce Websites, optimising it with HTML, CSS,
                    JavaScript & Bootstrap.</li>
            ]},
        {
            designation:"Android Developer Intern",
            organization:"NullClasses",
            location:"Remote",
            startdate:"Sept 2023",
            enddate:"Oct 2023",
            desc:[
                <li>Contributed to the creation of a messenger app which is similar to Whatsapp.</li>,
                <li>Work alongside my teammates to upgrade messaging features.</li>,
                <li>Focused on user interface design .</li>
            ]},
        {
            designation:"Front-End Web Developer",
            organization:"CYberoze",
            location:"Noida ,UP",
            startdate:"Aug 2024",
            enddate:"Till Now",
            desc:[
                <li>Developing a social networking platform primarily used for professional networking and career development named as <a href="https://app.showstage.in">Show Stage</a> </li>,
                <li>Gained hands-on Experience in Frontend Frameworks like React and Next </li>,
                <li>Also worked with different utilities and technologies like Git/Gihub Version Control, Tailwind CSS, Bootstrap and APIs </li>,
                <li>Contributed in developement of a Website for a Travel Company <a href="https://www.go4explore.com">Go4explore</a></li>

            ]},
    ]
    return <section class="overflow-x-scroll hidescrollbar roboto h-100 w-100 d-flex align-items-center justify-center">
        {experience.map((val,i)=>{
            return <div className="d-flex align-items-center">
                <div className="h-fit rounded-3xl d-flex flex-col hovershadow align-items-center justify-start excard p-4 gap-4">
                        <span className="text-xl font-light">{val.designation}</span>
                        <span className="text-lg font-light">[ {val.organization} ]</span>
                    
                    <div className="d-flex w-100 justify-between">
                        <span className="text-md font-light">{val.location}</span>
                        <span className="text-md font-light">{val.startdate} -{val.enddate}</span>
                    </div>
            <ul className="text-xs font-light list-disc tracking-wide leading-5">
            {val.desc}
            </ul>
        </div>
        {experience.length!==i+1 && <div className="continuty"></div>}
        </div>
        })}
    
</section>
}