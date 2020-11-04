import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './Stats.module.scss'
import { getAllSessions } from '../../apiCalls'
import { PieChart } from 'react-minimal-pie-chart'

const Stats = ({ toggleTimerView }) => {
  const [ sessionsLog, setSessionLog ] = useState(null)
  const [ pieChartData, setPieChartData ] = useState([])

  useEffect(() => {
    toggleTimerView(true)
    getAllSessions()
    .then(results => results.data.rests)
    .then(rests => {
      setSessionLog(rests)
      createPieChart(rests)
    })
    .catch(error => console.log(error))
  }, [])

  const createPieChart = (rests) => {
    const newPieChartData = { 
      somaticTotal: 0, 
      movementTotal: 0, 
      meditationTotal: 0 
    }

    for(let i = 0; i < rests.length; i++) {
      if(rests[i]['content_selected'] === 'MOVEMENT') {
        newPieChartData.movementTotal += 1
      }
      if (rests[i]['content_selected'] === 'SOMATIC') {
        newPieChartData.somaticTotal += 1
      }
      if (rests[i]['content_selected'] === 'MEDITATION') {
        newPieChartData.meditationTotal += 1
      }
    }

    return setPieChartData(newPieChartData)
  }

  return (
    <article>
      <h2 className={style.prompt}>
        <span role="img" alt="hourglass emoji" aria-label="hourglass emoji">
          ⏳
        </span>{" "}
        Stats Page Coming Soon!{" "}
        <span role="img" alt="hourglass emoji" aria-label="hourglass emoji">
          ⏳
        </span>
      </h2>
      <section className={style.statsDesc}>
        <div className={style.line}></div>
        <p>
          <strong className={style.strong}>Check back soon</strong> for personal
          stats, so you can see the positive impact Som Timer is having on your
          productivity and mental health. Stats will include data such as a log
          of pom cycles taken, mood and engagement tracking, and what types of
          content work best for you!
        </p>
        <div className={style.line}></div>
      </section>
    </article>
  );
}

export default Stats

Stats.propTypes = {
  toggleTimerView: PropTypes.func
}