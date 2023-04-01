import { useEffect, useState } from 'react'
import { setConstantValue } from 'typescript'

export default function Card(props) {
  const [activity, setActivity] = useState({})

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

  useEffect(() => {
    setActivity(newArr[Math.floor(Math.random() * newArr.length)])
  }, [newArr])

  return (
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
  )
}
