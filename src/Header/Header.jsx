import React from "react";
import styles from "./header.module.css";
import logo from "./logo.jpg";





const Header = () => {
    
  return (
      <div>
      
    <header className={styles.header}>
         
        <img src={logo} className={styles.img}/>
        
        <div className={styles.frases}>
       <h1 className={styles.titulo}>zutterman </h1>
         <p className={styles.subtitulo}>Measure Tapes</p> 
         </div>
      

      <nav className={styles.nav}>
        <a className={styles.link} href="#">
          ABOUT US
        </a>
        <a className={styles.link} href="#">
          MODELS
        </a>
        <a className={styles.link} href="#">
          GUARANTEE
        </a>
      </nav>
    </header>
    </div>
    
  );
};

export default Header;