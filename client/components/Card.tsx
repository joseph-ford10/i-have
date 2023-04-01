import { useEffect, useState } from 'react'
import { setConstantValue } from 'typescript'

export default function Card(props) {
  const { activities } = require('../../activities')
  const newArr = []
  for (let i = 0; i < activities.length; i++) {
    if (
      activities[i].type == props.selection.type &&
      activities[i].timeCat == props.selection.time
    ) {
      newArr.push(activities[i])
    }
  }
  const [activity, setActivity] = useState(
    newArr[Math.floor(Math.random() * newArr.length)]
  )

  function handleClick(event) {
    event.target.className == 'generateNew'
      ? setActivity(newArr[Math.floor(Math.random() * newArr.length)])
      : props.pageChange('form')
    console.log(event)
    console.log(activity)
  }

  return (
    <>
      <div>
        <h1>
          Something you can {props.selection.type} in {props.selection.time}{' '}
          minutes? Why not try...
        </h1>
        <h2>{activity.name}</h2>
        <h3>{activity.description}</h3>
        <p>Estimated time: {activity.timeEst}</p>
        <p>Link: {activity.link}</p>
        <p>Other users give it: {activity.score}</p>
      </div>
      <button onClick={handleClick} className="generateNew">
        Don't like it? Generate another suggestion
      </button>
      <button onClick={handleClick} className="returnToSelect">
        Return to selection
      </button>
    </>
  )
}
