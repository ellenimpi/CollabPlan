import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props;
  console.log("notification: ", notifications);
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(notification =>{
              return <li key={notification.id}>
                <span className="blue-text">{notification.user} </span>
                <span>{notification.content}</span>
                <div className="note-date grey-text lighten-4">{moment(notification.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications