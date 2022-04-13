import React from "react";
import styles from "./footer.module.css";
import youtube from "./youtube.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";




const Footer = () => {
    
  return (
    <div>
           <footer className={styles.footer}>

        
           
           <div style={{display: "flex", flexDirection: "column"}}>
            <p className={styles.p}> Follow Us </p>
            <section style={{display: "flex", marginLeft: "30px"}}>
           <img src={youtube} className={styles.img}/>
           <img src={facebook} className={styles.img}/>
           <img src={twitter} className={styles.img}/>
           </section>
           </div> 
           
            <section style={{display: "flex", flexDirection: "column", marginLeft: "100px"}}>
            <p className={styles.p}> Contact </p>
            <p className={styles.address}> 2490 Leisure Lane San Luis Obispo California </p>
            </section>
           

         

          </footer>
    </div>
    
  );
};

export default Footer;