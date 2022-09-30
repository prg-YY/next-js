import { useRouter } from "next/router"
import { useState } from "react"

const Events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const featchSportEvents = async () => {
    const response = await fetch("http://localhost:4000/events?category=sports")
    const data = await response.json()
    setEvents(data)
    router.push("/events?category=sports", undefined, { shallow: true })
  }
  return (
    <div>
      <button onClick={featchSportEvents}>Sports events</button>
      <h1>Events List</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h3>{`Event Title : ${event.title}`}</h3>
            <p>{`Event Description : ${event.description}`}</p>
            <p>{`Event Category : ${event.category}`}</p>
            <p>{`Event Date : ${event.date}`}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default Events

export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category ? "category=sports" : ""
  const res = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await res.json()

  return {
    props: {
      eventList: data,
    },
  }
}
