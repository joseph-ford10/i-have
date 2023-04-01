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
  const randNum = Math.floor(Math.random() * newArr.length)

  return (
    <div>
      <h1>
        Something you can {props.selection.type} in {props.selection.time}{' '}
        minutes? Why not try...
      </h1>
      <h2>{newArr[randNum].name}</h2>
      <h3>{newArr[randNum].description}</h3>
      <p>Estimated time: {newArr[randNum].timeEst}</p>
      <p>Link: {newArr[randNum].link}</p>
      <p>Other users give it: {newArr[randNum].score}</p>
    </div>
  )
}
