import React from 'react'
import style from './ContentSelection.module.scss'

const ContentSelection = () => {
  return (
    <section className={style.ContentSelection}>
      
      <div>
        <button aria-label="yoga/movement"></button>
        <p>Yoga / Movement</p>
      </div>
      <div>
        <button aria-label="somatic exercise"></button>
        <p>Somatic Exercise</p>
      </div>
      <div>
        <button aria-label="breathwork/meditation"></button>
        <p>Breathwork / Meditation</p>
      </div>
    </section>
  )
}

export default ContentSelection