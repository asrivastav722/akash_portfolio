import "./Education.scss"
export default function Education(){
    const education=[
        {name:"High School",percent:"51.4%",college:"Jesus & Mary School & College ,ICSE Board -Balrampur",year:"2016"},
        {name:"Intermediate",percent:"59.4%",college:"UMV College ,UP Board -Gonda",year:"2019"},
        {name:"Bachelor of Technology -Computer Science & Engineering",percent:"83%",college:"Babu Banarasi Das University ,Lucknow",year:"2020-2024"},
    ]
    return (<section class="h-100 w-100 px-4">
        <div class="d-flex align-items-center px-4 justify-center flex-col h-100 w-100 ">
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
        </section>
        )
}