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
      <div className="card">
        <div className="card-container">
          <h1>
            Something you can {props.selection.type} in {props.selection.time}{' '}
            minutes? Why not try...
          </h1>
          <h2 className="activity-name">{activity.name}</h2>
          <h3 className="activity-description">{activity.description}</h3>
          <p>Estimated time: {activity.timeEst}</p>
          <p>
            <a href={activity.link} className="activity-link">
              {activity.type} it here
            </a>
          </p>
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={handleClick} className="generateNew">
          Something else
        </button>
        <button onClick={handleClick} className="returnToSelect">
          Select again
        </button>
      </div>
    </>
  )
}
