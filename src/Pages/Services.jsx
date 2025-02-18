import React from 'react'
import'../Pages/service.css'
const Services = () => {
  return (
    <div>
      <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
  <div className="flipper">
    <div className="front">
      <span className="name">David Walsh</span>
    </div>
    <div className="back">
      <div className="back-logo"></div>
      <div className="back-title">@davidwalshblog</div>
      <p>Mozilla Web Developer, MooTools & jQuery Consultant, MooTools Core Developer, Javascript Fanatic, CSS Tinkerer, PHP Hacker, and web lover.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Services
