import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul className="navbar">
      <div className="navbar-items">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="add">Add</Link>
        </li>
      </div>
    </ul>
  )
}
