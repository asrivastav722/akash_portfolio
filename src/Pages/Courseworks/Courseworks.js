
import "./Courseworks.scss"
export default function Courseworks(){
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
    return (
    <section class="h-100 w-100 d-flex justify-center align-items-center overflow-y-scroll hidescrollbar ">
            
        <ul class="d-flex align-items-center justify-center p-20 flex-wrap gap-4">
            
            {courses.map((val)=>{return <li class="rounded-2xl text-md px-3 py-2 text-nowrap roboto hovershadow">{val}</li>})}
        
        </ul>

    </section>
    )}