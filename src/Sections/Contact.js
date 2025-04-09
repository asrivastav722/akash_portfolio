import react from "React";
export default function Contact(){
    return (
        <section class="contactme" id="five">
        <div class="col1">
            <p class="cus">Contact Us</p>
            <p class="ct">Let's make something new, different and more meaningful or make thing more visual or
                conceptual?</p>
            <div class="cont">
                <img height="30px" class="cimg" src="assets/call.png" alt=""/>
                <div class="ctexthold">
                    <p class="ctext">Call me</p>
                    <p class="ccont">+91 -8081111867</p>
                </div>
            </div>
            <div class="cont">
                <img height="30px" class="cimg" src="assets/mail.png" alt=""/>
                <div class="ctexthold">
                    <p class="ctext">Email</p>
                    <p class="ccont">sasgriggs329@gmail.com</p>
                </div>
            </div>
            <div class="cont">
                <img height="40px" src="assets/add.png" alt="" />
                <div class="ctexthold">
                    <p class="ctext">Address</p>
                    <p class="ccont">Lucknow-UP</p>
                </div>
            </div>
        </div>
        <div class="col2">
            <p class="cus">Drop a line</p>                             
                
               
                
           <form class="feed" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="9b882dfd-33c2-4bf8-8051-35846a199346" />
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="text" placeholder="Phone" name="phone" id="phone" />
                <textarea name="message" placeholder="Message" required></textarea />
                <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                <button class="sub" type="submit">Submit</button>
        </form>
        </div>
    </section>
    )
}