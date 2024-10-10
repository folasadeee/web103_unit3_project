const getAllEvents = async () => {
    const response = await fetch(`http://localhost:3000/events`);
    const data = await response.json();
    console.log(data);
    return data;
};

const getEventsById = async (id) => {
    const response = await fetch(`http://localhost:3000/events/${id}`);
    const data = await response.json();
    return data;
};

export default {
    getAllEvents, getEventsById
};

