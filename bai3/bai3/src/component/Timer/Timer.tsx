import React, { useState } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PATH } from '../../routes/path'
const Timer = () => {
  const [time, setTime] = useState({
    hr: 0,
    min: 0,
    sec: 0,
    milli: 0,
  })
  const [status, setStatus] = useState()
  let updHr = time.hr
  let updMin = time.min
  let updSec = time.sec
  let updMilli = time.milli
  const start = () => {
    checkTime()
    setStatus(setInterval(checkTime, 10))
  }
  // lười fix typescript
  const stop = () => {
    clearInterval(status)
  }
  const reset = () => {
    clearInterval(status)
    setTime({
      hr: 0,
      min: 0,
      sec: 0,
      milli: 0,
    })
  }
  const checkTime = () => {
    if (updMilli === 100) {
      updMilli = 0
      updSec++
    }
    if (updSec === 60) {
      updSec = 0
      updMin++
    }
    if (updMin === 60) {
      updMin = 0
      updHr++
    }
    updMilli++
    return setTime({
      hr: updHr,
      min: updMin,
      sec: updSec,
      milli: updMilli,
    })
  }
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to={PATH.HOME}>Home</Link>,
          },
          {
            title: <Link to={PATH.TIMER}>Timer</Link>,
          },
        ]}
      />
      <div className="container ">
        <h1>{time.hr + ' : ' + time.min + ' : ' + time.sec + ' : ' + time.milli}</h1>
        <div className="buttons">
          <button onClick={start} className="start">
            Start
          </button>
          <button onClick={stop} className="stop center">
            Stop
          </button>
          <button onClick={reset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Timer
