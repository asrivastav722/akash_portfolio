import "./Education.scss"
export default function Education(){
    const courses=[
        "Full Stack Web Development -Udemy",
        "Python Developer Essentials -Udemy",
        "Data Structures & Algorithm",
        "Operating Systems",
        "Fuzzy Logics",
        "Advance Computer Organization ",
        "DBMS",
        "Genetic Algorithm",
        "Computer Networking",
        "Microprocessors and interfaces",
        "Object oriented programming"
    ]
    
    const education=[
        {name:"High School",percent:"51.4%",college:"Jesus & Mary School & College ,ICSE Board -Balrampur",year:"2016"},
        {name:"Intermediate",percent:"59.4%",college:"UMV College ,UP Board -Gonda",year:"2019"},
        {name:"Bachelor of Technology -Computer Science & Engineering",percent:"83%",college:"Babu Banarasi Das University ,Lucknow",year:"2020-2024"},
    ]
    return (<section class="d-flex h-100 w-100 px-4 overflow-y-scroll hidescrollbar">
        <div class="d-flex align-items-center px-4 justify-center flex-col h-100 w-100 ">
            <p className="m-0 mb-4 p-0 darktext roboto text-2xl ">Academics</p>
            {education.map((value,i)=>{
                return(
                    <div className="w-100 d-flex flex-col align-items-center justify-center">
            <div class="roboto hovershadow rounded-xl px-4 py-4 d-flex flex-col w-100 gap-3">
                <div class="d-flex justify-between">
                    <p class="m-0 p-0 text-lg">{value.name}</p>
                    <p class="m-0 p-0 text-lg">{value.percent}</p>
                </div>
                <div class="d-flex justify-between">
                    <p class="m-0 p-0 ">{value.college}</p>
                    <p class="m-0 p-0">{value.year}</p>
                </div>
            </div>
            {education.length!==i+1 && <div className="dottedline"></div>}
            </div>
        )})}

        </div>
    
    <section class="h-100 w-100 d-flex flex-col justify-center align-items-center  ">
        <p className="m-0 mb-4 p-0 darktext roboto text-2xl  ">Certification & Courses</p>

            
        <ul class="d-flex align-items-center justify-center p-10 flex-wrap gap-3">
            
            {courses.map((val)=>{return <li class="rounded-2xl text-sm px-3 py-2 text-nowrap roboto hovershadow">{val}</li>})}
        
        </ul>

    </section>

        </section>
        )
}