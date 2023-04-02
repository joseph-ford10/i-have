import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul className="navbar">
      <div className="navbar-items">
        <li className="navbar-item logo">I'VE GOT</li>
        <li className="navbar-item">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="about" className="link">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="add" className="link">
            Add
          </Link>
        </li>
      </div>
    </ul>
  )
}
