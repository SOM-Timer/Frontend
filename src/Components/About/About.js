import React from 'react'
import style from './About.module.scss'

const About = () => {
  return (
    <section className={style.About}>
      <section>
        <h2>About Som Timer</h2>
        <section className={style.appDescription}>
          <p><b>Som Timer</b> is a timer that cares. Inspired by the Pomodoro Technique®, the practice of taking regular breaks at set intervals to fight cognitive boredom and burnout, increase productivity, and boost motivation, Som Timer takes the concept one step further. We at Som Timer believe that what you do on your breaks is just as important as the decision to take those breaks. </p>
          <p>Mindfulness meditation and other somatic exercises have been linked to enhanced productivity, boosted mental health, and stress reduction. To encourage this state of mind and take the guesswork out of your breaks, Som Timer provides mindfulness-related content for you during your break interval, so you can get back to work feeling refreshed, calm, and ready to tackle the next task.</p>
          <p className={style.disclaimer}>This timer is not affiliated with, associated with, or endorsed by the Pomodoro Technique® or its creator, Francesco Cirillo. 
          </p>
        </section>
      </section>
      <section className={style.contributors}>
        <section className={style.engineerList}>
          <h3>Front End Engineers: </h3>
          <p><a href='https://github.com/Abdeboskey' target='_blank'>Aaron Burris-DeBoskey</a></p>
          <p><a href='https://github.com/jkwest-93' target='_blank'>Jake West</a></p>
          <p><a href='https://github.com/rwilliams659' target='_blank'>Rachel Williams</a></p>
        </section>
        <section className={style.engineerList}>
          <h3>Back End Engineers: </h3>
          <p><a href='https://github.com/Chulstro' target='_blank'>Chandler Hulstrom</a></p>
          <p><a href='https://github.com/sciencefixion' target='_blank'>Dorion</a></p>
          <p><a href='https://github.com/sienna-kopf' target='_blank'>Sienna Kopf</a></p>
        </section>
      </section>
    </section>
  )
}

export default About