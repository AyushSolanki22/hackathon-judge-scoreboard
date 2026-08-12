import {Router} from 'express';
import {getJudges,createJudge} from '../controllers/judgeController.js';
const r=Router();r.get('/',getJudges);r.post('/',createJudge);export default r;
