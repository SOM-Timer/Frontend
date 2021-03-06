import React, { useContext } from 'react'
import { ViewContext } from '../../Context/ViewContext'
import { VideoProvider } from '../../Context/VideoContext'
import ContentDelivery from '../ContentDelivery/ContentDelivery'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import ContentSelection from '../ContentSelection/ContentSelection'
import MoodRating from '../MoodRating/MoodRating'
import style from './HomeContainer.module.scss'

const HomeContainer = () => {
  const [ view ] = useContext(ViewContext)

  return (
    <div className={style.HomeContainer} id="HomeContainer">
      <VideoProvider>
        {view === "timer" && <CountdownTimer />}
        {view === "content-selection" && <ContentSelection />}
        {view === "content-delivery" && <ContentDelivery />}
        {(view === "mood-rating-1" || view === "mood-rating-2") && (
          <MoodRating />
        )}
      </VideoProvider>
    </div>
  );
}

export default HomeContainer