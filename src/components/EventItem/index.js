import './index.css'

const EventItem = props => {
  const {eachEvent, onEvent} = props
  const {imageUrl, name, location, id} = eachEvent

  const onEventSelected = () => {
    onEvent(id)
  }

  return (
    <li>
      <button type="button" onClick={onEventSelected}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
