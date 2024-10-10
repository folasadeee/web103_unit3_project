import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch(`http://localhost:3000/locations/${index}`);
                const data = await response.json();
                setLocation(data[0]);
            } catch (error) {
                console.error("Error fetching location:", error)
            }
        }

        const fetchEventsByLocation = async () => {
            try {
                const response = await fetch('http://localhost:3000/events')
                const data = await response.json();
                const filteredEvents = data.filter(event => event.location_id === index);
                setEvents(filteredEvents);
            } catch (error) {
                console.error(error)
            }
        }
        fetchLocation();
        fetchEventsByLocation();
    } 
        , [index]
    )

    console.log(location.name)

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents