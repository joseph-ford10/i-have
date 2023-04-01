import { useState } from 'react'

export default function Form(props) {
  const [mouse, setMouse] = useState('mouse out')
  const [time, setTime] = useState('')
  const [type, setType] = useState('')
  const [form, setForm] = useState({ time: '', type: '' })
  const [message, setMessage] = useState('')
  const [page, setPage] = useState('form')
  const [clicked, setClicked] = useState('false')

  function handleTimeChange(event) {
    setTime(event.target.value)
  }

  function handleActivityChange(event) {
    setType(event.target.value)
  }

  function mouseEnter(event) {
    setTime(event.target.value)
  }

  // function mouseLeave(event) {
  //   setMouse('mouse out')
  // }

  async function handleSubmit(event) {
    event.preventDefault()
    if (time == '0' || type == '') {
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
            <h2>I've got... {time} minutes</h2>
            <div
              // onMouseEnter={mouseEnter}
              onClick={handleTimeChange}
              className="selectTime"
            >
              <input
                type="radio"
                id="15"
                name="time-select"
                value="15"
                className="button-15"
              />
              {/* <label htmlFor="15">15 Minutes</label> */}
              <input
                type="radio"
                id="30"
                name="time-select"
                value="30"
                className="button-30"
              />
              {/* <label htmlFor="30">30 Minutes</label> */}
              <input
                type="radio"
                id="45"
                name="time-select"
                value="45"
                className="button-45"
              />
              {/* <label htmlFor="45">45 Minutes</label> */}
              <input
                type="radio"
                id="hour"
                name="time-select"
                value="hour"
                className="button-hour"
              />
              {/* <label htmlFor="hour">1 Hour</label> */}
            </div>
          </div>
          <div className="select-activity-container">
            {' '}
            <div onChange={handleActivityChange} className="selectActivity">
              <h2>I want something...</h2>
              <input
                type="radio"
                id="read"
                name="activity-select"
                value="read"
                className="read-button"
              />
              {/* <label htmlFor="read">to read</label> */}
              <input
                type="radio"
                id="watch"
                name="activity-select"
                value="watch"
                className="watch-button"
              />
              {/* <label htmlFor="watch">to watch</label> */}
              <input
                type="radio"
                id="read"
                name="activity-select"
                value="do"
                className="do-button"
              />
              {/* <label htmlFor="do">to do</label> */}
              <input
                type="radio"
                id="learn"
                name="activity-select"
                value="learn"
                className="learn-button"
              />
              {/* <label htmlFor="learn">to learn</label> */}
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>Selected time: {time}</p>
      <p>Selected activity: {type}</p>
      {/* <p>{tempTime}</p> */}
    </>
  )
}
