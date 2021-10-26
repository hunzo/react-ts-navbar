import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <nav className="navbar">
                    <div className="brand-title">Brand Name</div>
                    <div
                        className="toggle-button"
                        onClick={() => {
                            const NavLinks =
                                document.getElementsByClassName(
                                    'navbar-links'
                                )[0]
                            NavLinks.classList.toggle('active')
                        }}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Router>
        </div>
    )
}

export default App
