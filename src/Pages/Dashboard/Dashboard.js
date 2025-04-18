import "./Dashboard.scss"
import Profile from "../../assets/images/profile.jpg"
import Facebook from "../../assets/images/fb.png"
import Linkedin from "../../assets/images/ln.png"
import Github from "../../assets/images/gh.png"
export default function About(){

    return  <section class="h-100 w-100 d-flex align-items-center justify-around py-4 ">

    <div class="d-flex w-25 flex-col">
        <p class="welcome roboto">Welcome! I'M</p>
        <p class="roboto text-4xl">Akash Raj</p>
        <p class="roboto">Front-End Developer</p>
        <p class="intro roboto tracking-wide ">I have 20 Months of experience in front-end development, where I've worked extensively with HTML, CSS, JavaScript, and frameworks like React, Nextjs . I've built responsive, mobile-friendly applications and collaborated closely with designers to deliver user-centric interfaces. </p>
    
    </div>

    <img class="profile" src={Profile} alt=""/>

    <div class="social roboto">
        <p id="follow">FOLLOW ME ON </p>
        <a href="https://www.facebook.com/lamborghni.aventador/"><img class="slogo" src={Facebook} alt=""/></a>
        <a href="https://www.linkedin.com/in/akash-raj-90a2a7320/"><img class="slogo" src={Linkedin} alt=""/></a>
        <a href="https://github.com/asrivastav722"><img  class="slogo" src={Github} alt=""/></a>
    </div>
</section>
}