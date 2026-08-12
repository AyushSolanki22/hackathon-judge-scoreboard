import {Router} from 'express';
import {getTeams,createTeam} from '../controllers/teamController.js';
const r=Router();r.get('/',getTeams);r.post('/',createTeam);export default r;
