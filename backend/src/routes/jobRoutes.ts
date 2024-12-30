import express from 'express';
import { getFeaturedJobs, getCategories, applyToJob } from '../controllers/jobController';

const router = express.Router();

router.get('/jobs/featured', getFeaturedJobs);
router.get('/categories', getCategories);
router.post('/jobs/apply', applyToJob);

export default router;
