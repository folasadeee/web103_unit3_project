import EventsAPI from "../services/EventsAPI";
import LocationsAPI from "../services/LocationsAPI";
import React, { useState, useEffect } from 'react'
import Event from "../components/Event";
import '.././css/Events.css';

const Events = () => {

const [eventsData, setEventsData] = useState([]);
const [venueNames, setVenueNames] = useState({venue1: '', venue2: '', venue3: '', venue4: ''})

useEffect(() => {
    (async () => {
        try {
            const locationsData = await LocationsAPI.getAllLocations();
            console.log(locationsData)

            setVenueNames({venue1: locationsData[0].name, venue2: locationsData[1].name, venue3: locationsData[2].name, venue4: locationsData[3].name})
            console.log(venueNames)
        }
        catch (error) {
            throw error
        }
    }) ()
}, [])

useEffect(() => {
    (async () => {
        try {
            const eventsData = await EventsAPI.getAllEvents()

            setEventsData(eventsData)


        }
        catch (error) {
            throw error
        }
    }) ()
}, [])

    return (<>
    <h1>Events</h1>

    <main>
        <div class="events-grid">
    {
                    eventsData && eventsData.length > 0 ? eventsData.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled!'}</h2>
                }</div>
    </main>
</>
    );
}
export default Events;