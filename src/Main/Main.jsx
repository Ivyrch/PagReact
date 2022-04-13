import React from "react";
import styles from "./main.module.css";
import fita1 from "./fita1.png";
import fita2 from "./fita2.png";





const Main = () => {
    
  return (
      <div>
          <section className={styles.principal}> 
        <h3 className={styles.frase1}> Measuring everything </h3>
         
        <img src={fita1} className={styles.img}/>
        
        </section>
        <section className={styles.principal2}>
        
          <section style={{direction: "flex"}}>
        <h3 className={styles.frase2}> We are Leader in Measure Tapes</h3>
        <p style={{color: "white", width: "190px", marginLeft: "60px", textAlign: "start"}}> The are 5x the circumference of planet earth in metric tapes.</p>
        </section>
        <img src={fita2} className={styles.img2}/>
        

        </section>
    </div>
    
  );
};

export default Main;