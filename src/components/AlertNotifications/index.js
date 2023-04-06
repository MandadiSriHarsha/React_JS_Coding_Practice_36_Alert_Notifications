import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success-style notification-icon" />
      <div className="notification-content-card">
        <h1 className="notification-content-card-heading success-style">
          Success
        </h1>
        <p className="notification-content-card-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="error-style notification-icon" />
      <div className="notification-content-card">
        <h1 className="notification-content-card-heading error-style">Error</h1>
        <p className="notification-content-card-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="notification-icon warning-style" />
      <div className="notification-content-card">
        <h1 className="notification-content-card-heading warning-style">
          Warning
        </h1>
        <p className="notification-content-card-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="notification-icon info-style" />
      <div className="notification-content-card">
        <h1 className="notification-content-card-heading info-style">Info</h1>
        <p className="notification-content-card-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
