// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdInfo, MdWarning} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const initialNotificationsList = [
  {
    id: 1,
    icon: (
      <div
        style={{
          backgroundColor: '#2dca73',
        }}
      >
        <AiFillCheckCircle
          style={{
            color: '#e5e5e5',
          }}
        />
      </div>
    ),
    heading: 'Success',
    description: 'You can access all the files in the folder',
    isClicked: false,
    errorColor: ' #2dca73',
  },
  {
    id: 2,
    icon: (
      <div
        style={{
          backgroundColor: '#ff0b37',
        }}
      >
        <RiErrorWarningFill
          style={{
            color: '#e5e5e5',
          }}
        />
      </div>
    ),
    heading: 'Error',
    description:
      ' Sorry, you are not authorized to have access to delete the file',
    isClicked: false,
    errorColor: '#ff0b37',
  },

  {
    id: 3,
    icon: (
      <div
        style={{
          backgroundColor: '#ffb800',
        }}
      >
        <MdWarning
          style={{
            color: '#e5e5e5',
          }}
        />
      </div>
    ),

    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
    isClicked: false,
    errorColor: '#ffb800',
  },

  {
    id: 4,
    icon: (
      <div
        style={{
          backgroundColor: '#0f81e0',
        }}
      >
        <MdInfo
          style={{
            color: '#e5e5e5',
          }}
        />
      </div>
    ),
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
    isClicked: false,
    errorColor: '#0f81e0',
  },
]

class AlertNotifications extends Component {
  state = {
    listOfNotifications: initialNotificationsList,
    isClicked: false,
  }

  render() {
    const {listOfNotifications, isClicked} = this.state
    return (
      <div className="alert-container">
        <h1>Alert Notifications</h1>
        <ul className="list-container">
          {listOfNotifications.map(eachIteam => (
            <Notification key={eachIteam.id} notificationDetails={eachIteam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
