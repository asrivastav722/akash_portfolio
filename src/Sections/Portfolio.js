export default function Portfolio(){
    return <section class="Portfolio" id="one">

    <div class="porthead">
        <div id="porttext">Portfolio</div>
        <div class="portoption">
            <div id="portpers" onclick="showPers()">Professional</div>
            <div id="portprof" onclick="showProf()">Personal</div>
        </div>
    </div>
    <div id="personal">
        <a href="https://github.com/asrivastav722/Blog-page">
            <div class="pro"> <img class="provid" src="assets/blog.JPG"/></div>
        </a>
        <a href="https://github.com/asrivastav722/Personal-Site">
            <div class="pro"><img class="provid" src="assets/personal.JPG"/></div>
        </a>
        <a href="https://github.com/asrivastav722/Band-Name-Generator">
            <div class="pro"><img class="provid" src="assets/band.JPG"/></div>
        </a>
    </div>
    <div id="professional">
        <a href="https://asrivastav722.github.io/The-Dicee-Game/">
            <div class="pro"><img class="provid" src="assets/dice.JPG"/></div>
        </a>
        <a href="https://asrivastav722.github.io/Drum-Kit/">
            <div class="pro"><img class="provid" src="assets/drum.JPG"/></div>
        </a>
        <a href="https://asrivastav722.github.io/Simon-Game/">
            <div class="pro"><img class="provid" src="assets/simon.JPG"/></div>
        </a>
    </div>
</section>
}