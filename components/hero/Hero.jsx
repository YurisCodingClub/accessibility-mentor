import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className ={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h2>Heading</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum perspiciatis repudiandae quidem ex! Fugiat ea cum nam eos consectetur quo delectus debitis, aspernatur consequuntur. 
          </p>
          </div>
         <div className={styles.heroImg}>
            <img
              src="/images/hero-img.jpeg"
              alt="Avatar image of a user" /> 
          </div>
         </div>
    </section>
  )
}

export default Hero
