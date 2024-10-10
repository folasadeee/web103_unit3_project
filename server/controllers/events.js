import { pool } from '../config/database.js';

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY date ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);
    }
}

const getEventById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, location_id, date, image 
        FROM events 
        WHERE id = $1`;

        const eventId = req.params.eventId;
        const results = await pool.query(selectQuery, [eventId]);
        res.status(200).json(results.rows);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default {
    getEvents,
    getEventById
};
