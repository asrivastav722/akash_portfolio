
export default function Header({location,navData,...props}){
  

  return  <header className=" px-10 d-flex justify-between align-items-center">

            <p className="m-0 p-0 darktext text-uppercase roboto text-2xl">{navData.map((value)=>{return value.path===location && value.name})}</p>
       
          </header>
}