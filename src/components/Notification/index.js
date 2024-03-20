// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {notificationDetails} = props
  const {id, icon, heading, description, errorColor} = notificationDetails
  return (
    <li className="list-card">
      {icon}
      <div className="card1">
        <h1 className={`error-name ${errorColor}`}>{heading}</h1>

        <p className="paragraph5">{description}</p>
      </div>
      <button className="delete-btn" type="delete-btn">
        <GrFormClose />
      </button>
    </li>
  )
}

export default Notification
