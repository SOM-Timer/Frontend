import React, { useContext, useEffect } from 'react'
import style from './Settings.module.scss'
import { SettingsContext } from '../../Context/SettingsContext'
import { updateSettings } from '../../apiCalls'
// import gong from '../../assets/audio/gong.mp3'
// import goodOldSynths from '../../assets/audio/goodOldSynths.mp3'
// import pianoDreams from '../../assets/audio/pianoDreams.mp3'
// import chordCliff from '../../assets/audio/chordCliff.mp3'
// import levelUp from '../../assets/audio/levelUp.mp3'
// import birdChord from '../../assets/audio/birdChord.mp3'
// These ↑ are here in case we want the sounds to play onSelect from the settings menu


const Settings = () => {
  const [settings, setSettings] = useContext(SettingsContext)

  useEffect(() => {
    updateSettings(settings)
  }, [ settings ])

  const onChange = (event) => {
    setSettings({
      ...settings,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div className={style.settingsContainer}>
      <h2 className={style.settingsHeader}>Settings</h2>
      <div className={style.intervalContainer}>
        <p className={style.intervalLabel}>Select your work interval:</p>
        <input
          type='number'
          min={0}
          max={240}
          id='workInterval'
          placeholder={settings.workInterval}
          onBlur={onChange}
          className={style.minutesInput}
          data-testid='workInterval'
        />
        <p>minutes</p>
      </div>
      <div className={style.intervalContainer}>
        <p className={style.intervalLabel}>Select your break interval:</p>
        <select
          onBlur={onChange}
          className={style.breakIntervalDropdown}
          name='Break'
          id='breakInterval'
          data-testid='breakInterval'
        >
          <option value={5}>5</option>
          <option value={7}>7</option>
          <option value={10}>10</option>
        </select>
        <p>minutes</p>
      </div>
      <div className={style.intervalContainer}>
        <p className={style.intervalLabel}>Select your alert sound:</p>
        <select
          onChange={onChange}
          className={style.breakIntervalDropdown}
          name='Sound'
          id='sound'
          data-testid='sound'
          value={settings.sound}
        >
          <option value={'chordCliff'}>Reverb Splash</option>
          <option value={'gong'}>Balinese Gong</option>
          <option value={'goodOldSynths'}>Good Ol' Synthesizers</option>
          <option value={'pianoDreams'}>Piano Dreams</option>
          <option value={'levelUp'}>Level Up</option>
          <option value={'birdChord'}>Bird Chord</option>
        </select>
      </div>
      <p className={style.saveAutomatically}>✨ Settings will save automagically ✨</p>
    </div>
  )
}

export default Settings