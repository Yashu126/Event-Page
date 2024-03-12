import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatusDetails} = props
  const {registrationStatus} = eventStatusDetails
  switch (registrationStatus) {
    case 'REGISTERED':
      return (
        <div className="event-status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            width="100"
          />
          <h1 className="status-heading">
            You have already registered for the event
          </h1>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="event-status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="status-img"
          />
          <p className="status">
            A live performance brings so much to your relationship with dance.
            seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="button" type="button">
            Register Here
          </button>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="event-status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="status-img"
          />
          <h1 className="status-heading">Registrations are Closed now!</h1>
          <p className="status">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      )
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
