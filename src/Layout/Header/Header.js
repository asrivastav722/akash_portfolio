import styles from "./Header.module.scss"
import Transformers from "../../assets/pngegg.png"
export default function Header(){
        const changeclr = (id) => {
          document.querySelectorAll(`.${styles.btn}, .${styles.sbtn}`).forEach(btn => {
            btn.classList.remove(styles.active);
          });
          document.querySelector(id).classList.add(styles.active);
        };
      
        const showSidebar = () => {
          document.querySelector(`.${styles.sbh}`).style.display = 'block';
        };
      
        const hideSidebar = () => {
          document.querySelector(`.${styles.sbh}`).style.display = 'none';
        };
  return  <header className={styles.header}>
       <div className={styles.logocontainer}>
         <img height="70px" className={styles.logo} src={Transformers} alt="Logo" />
       </div>
       <div className={styles.buttons}>
         <a className={styles.btn} id="po" href="#one" onClick={() => changeclr('#po')}>Portfolio</a>
         <a className={styles.btn} id="sk" href="#two" onClick={() => changeclr('#sk')}>Skillsets</a>
         <a className={styles.btn} id="ex" href="#three" onClick={() => changeclr('#ex')}>Experience</a>
         <a className={styles.btn} id="ed" href="#four" onClick={() => changeclr('#ed')}>Education</a>
         <a className={styles.btn} id="cm" href="#five" onClick={() => changeclr('#cm')}>Contact me</a>
         <a className={styles.btnAdv} href="https://drive.google.com/uc?export=download&id=1GuiA9QlHx8tx8aznOB2jKI_oexf6-Jcl">Download CV</a>
       </div>
 
       <div onClick={showSidebar}>
         <svg className={styles.menu} xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="#e8eaed">
           <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
         </svg>
       </div>
 
       <div className={styles.sbh} onClick={hideSidebar}>
         <div className={styles.sideButtons}>
           <div onClick={hideSidebar}>
             <svg className={styles.close} xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
               <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
             </svg>
           </div>
           <a className={styles.sbtn} id="po" href="#one" onClick={() => changeclr('#po')}>Portfolio</a>
           <a className={styles.sbtn} id="sk" href="#two" onClick={() => changeclr('#sk')}>Skillsets</a>
           <a className={styles.sbtn} id="ex" href="#three" onClick={() => changeclr('#ex')}>Experience</a>
           <a className={styles.sbtn} id="ed" href="#four" onClick={() => changeclr('#ed')}>Education</a>
           <a className={styles.sbtn} id="cm" href="#five" onClick={() => changeclr('#cm')}>Contact me</a>
           <a className={styles.sbtnAdv} href="https://drive.google.com/uc?export=download&id=1GuiA9QlHx8tx8aznOB2jKI_oexf6-Jcl">Download CV</a>
         </div>
       </div>
     </header>
}