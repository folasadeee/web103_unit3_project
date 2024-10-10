import EventsController from '../controllers/events.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', EventsController.getEvents);

router.get('/:eventId', EventsController.getEventById);

export default router;