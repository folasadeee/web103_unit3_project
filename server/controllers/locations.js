import { pool } from '../config/database.js';

const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);
    }
}

const getLocationById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, address, city, state, zip, image
        FROM locations 
        WHERE id = $1`;

        const locationId = req.params.locationId;
        const results = await pool.query(selectQuery, [locationId]);
        res.status(200).json(results.rows);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default {
    getLocations,
    getLocationById
};
