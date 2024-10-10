import LocationsController from '../controllers/locations.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', LocationsController.getLocations);

router.get('/:locationId', LocationsController.getLocationById);

export default router;