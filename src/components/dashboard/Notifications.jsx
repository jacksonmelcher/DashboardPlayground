import React from 'react'

const Notifications = (props) => {
  return (
    // <div className="section">
      <div className="card section">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul class="collapsible notifications">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">notifications</i>
                Twitter
                <span class="new badge">4</span>
              </div>
              <div class="collapsible-body">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">notifications</i>
                Alchemy
                <span class="new badge">2</span>
              </div>
              <div class="collapsible-body">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    // </div>
  )

}

export default Notifications;
