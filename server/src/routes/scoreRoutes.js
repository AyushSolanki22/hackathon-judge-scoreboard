import {Router} from 'express';
import {submitScore,getScores,getLeaderboardController} from '../controllers/scoreController.js';
const r=Router();r.get('/',getScores);r.get('/leaderboard',getLeaderboardController);r.post('/',submitScore);export default r;
