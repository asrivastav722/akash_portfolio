import "./Contact.scss"
export default function Contact(){
    const contact=[
        {name:"Phone",details:["+91-8081111867 ",",+91-9648146167"]},
        {name:"Email",details:["sasgriggs329@gmail.com"]},
        {name:"Address",details:["Noida, UP"]}
    ]
    
    return (
        <section class="p-20 roboto h-100 w-100 d-flex align-items-center justify-center gap-4" >
        <div class="d-flex w-100 h-100 flex-col gap-4">
            <span class="font-light">Let's make something new, different and more meaningful or make thing more visual or
                conceptual?</span>
            {contact.map((val)=>{
                return <div>
                    <p className="m-0 p-0 ">{val.name}</p>
                    <p className="m-0 p-0 font-light">{val.details.map((val)=>val)}</p>
                </div>
            })}
        </div>
        <div class="w-100 h-100 d-flex flex-col gap-3">
            <span class="text-3xl">Drop a line</span>                             
            
           <form class="d-flex flex-col gap-3" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="9b882dfd-33c2-4bf8-8051-35846a199346" />
                <input className="p-3" type="text" placeholder="Name" name="name" required />
                <input className="p-3" type="email" placeholder="Email" name="email" required />
                <input className="p-3" type="text" placeholder="Phone" name="phone" id="phone" />
                <textarea className="p-3" name="message" placeholder="Message" required />
                <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                <button class="sub" type="submit">Submit</button>
        </form>
        </div>
    </section>
    )
}