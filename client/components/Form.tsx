import { useState } from 'react'

export default function Form(props) {
  const [mouse, setMouse] = useState('mouse out')
  const [time, setTime] = useState('')
  const [type, setType] = useState('')
  const [form, setForm] = useState({ time: '', type: '' })
  const [message, setMessage] = useState('')
  const [page, setPage] = useState('form')
  const [timeClicked, setTimeClicked] = useState('false')
  const [timeMessage, setTimeMessage] = useState('')
  const [activityMessage, setActivityMessage] = useState('')
  const [activityClicked, setActivityClicked] = useState('false')

  function handleTimeChange(event) {
    setTimeClicked('true')
    setTime(event.target.value)
    setTimeMessage(`${event.target.value} minutes`)
  }

  function handleActivityChange(event) {
    setActivityClicked('true')
    setType(event.target.value)
    setActivityMessage(`to ${event.target.value}`)
  }

  function mouseOverTime(event) {
    setTimeClicked('false')
    setTimeMessage(`${event.target.value} minutes`)
  }

  function mouseOverActivity(event) {
    setActivityClicked('false')
    setActivityMessage(`to ${event.target.value}`)
  }

  function mouseLeaveTime(event) {
    if (timeClicked == 'false') {
      setTimeMessage('')
    }
  }

  function mouseLeaveActivity(event) {
    if (activityClicked == 'false') {
      setActivityMessage('')
    }
  }

  // function mouseLeave(event) {
  //   setMouse('mouse out')
  // }

  async function handleSubmit(event) {
    event.preventDefault()
    if (time == '' || type == '') {
      setMessage('Please select both options')
    } else {
      setMessage('')
      setForm({ time: '', type: '' })
      props.getSelection(time, type)
      props.pageChange('card')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="selectionForm">
        <div className="form-inputs">
          <div className="select-time-container">
            <h1>I've got...{timeMessage}</h1>
            <div
              // onMouseEnter={mouseEnter}
              // onClick={handleTimeChange}
              // onMouseOver={mouseOver}
              className="selectTime"
            >
              <div className="circle"></div>
              <input
                type="radio"
                id="15"
                name="time-select"
                value="15"
                className="button-15 time-button"
                onMouseOver={mouseOverTime}
                onClick={handleTimeChange}
                onMouseLeave={mouseLeaveTime}
              />
              {/* <label htmlFor="15">15 Minutes</label> */}
              <input
                type="radio"
                id="30"
                name="time-select"
                value="30"
                className="button-30 time-button"
                onMouseOver={mouseOverTime}
                onClick={handleTimeChange}
                onMouseLeave={mouseLeaveTime}
              />
              {/* <label htmlFor="30">30 Minutes</label> */}
              <input
                type="radio"
                id="45"
                name="time-select"
                value="45"
                className="button-45 time-button"
                onMouseOver={mouseOverTime}
                onClick={handleTimeChange}
                onMouseLeave={mouseLeaveTime}
              />
              {/* <label htmlFor="45">45 Minutes</label> */}
              <input
                type="radio"
                id="hour"
                name="time-select"
                value="hour"
                className="button-hour time-button"
                onMouseOver={mouseOverTime}
                onClick={handleTimeChange}
                onMouseLeave={mouseLeaveTime}
              />
              {/* <label htmlFor="hour">1 Hour</label> */}
            </div>
          </div>
          <div className="select-activity-container">
            <div onChange={handleActivityChange} className="selectActivity">
              <h1>I want something... {activityMessage}</h1>
              <input
                type="radio"
                id="read"
                name="activity-select"
                value="read"
                className="read-button type-button"
                onMouseOver={mouseOverActivity}
                onClick={handleActivityChange}
                onMouseLeave={mouseLeaveActivity}
              />
              {/* <label htmlFor="read">to read</label> */}
              <input
                type="radio"
                id="watch"
                name="activity-select"
                value="watch"
                className="watch-button type-button"
                onMouseOver={mouseOverActivity}
                onClick={handleActivityChange}
                onMouseLeave={mouseLeaveActivity}
              />
              {/* <label htmlFor="watch">to watch</label> */}
              <input
                type="radio"
                id="read"
                name="activity-select"
                value="do"
                className="do-button type-button"
                onMouseOver={mouseOverActivity}
                onClick={handleActivityChange}
                onMouseLeave={mouseLeaveActivity}
              />
              {/* <label htmlFor="do">to do</label> */}
              <input
                type="radio"
                id="learn"
                name="activity-select"
                value="learn"
                className="learn-button type-button"
                onMouseOver={mouseOverActivity}
                onClick={handleActivityChange}
                onMouseLeave={mouseLeaveActivity}
              />
              {/* <label htmlFor="learn">to learn</label> */}
            </div>
          </div>
        </div>
        <div className="submit-button-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
      {/* <p>{tempTime}</p> */}
    </>
  )
}
