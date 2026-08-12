import Score from '../models/Score.js';
import Team from '../models/Team.js';
import Judge from '../models/Judge.js';
import {emitLeaderboard} from '../config/socket.js';
const avg=a=>a.length?Number((a.reduce((x,y)=>x+y,0)/a.length).toFixed(2)):null;
export async function getLeaderboard(){
 const [teams,scores]=await Promise.all([Team.find().lean(),Score.find().lean()]);
 const rows=teams.map(t=>{const ss=scores.filter(s=>String(s.team)===String(t._id));const criteria=[...ss.map(s=>s.innovation),...ss.map(s=>s.codeQuality),...ss.map(s=>s.presentation)];return {id:t._id,teamCode:t.teamCode,name:t.name,submissions:ss.length,innovation:avg(ss.map(s=>s.innovation)),codeQuality:avg(ss.map(s=>s.codeQuality)),presentation:avg(ss.map(s=>s.presentation)),averageScore:avg(criteria)};});
 rows.sort((a,b)=>{if(a.averageScore===null)return 1;if(b.averageScore===null)return -1;return b.averageScore-a.averageScore;});
 return rows.slice(0,10).map((r,i)=>({...r,rank:r.averageScore===null?null:i+1}));
}
export async function submitScore(req,res){try{const {teamId,judgeId,innovation,codeQuality,presentation}=req.body;const values=[innovation,codeQuality,presentation].map(Number);if(!teamId||!judgeId||values.some(v=>!Number.isInteger(v)))return res.status(400).json({message:'Valid team, judge and integer scores are required.'});if(values.some(v=>v<1||v>10))return res.status(400).json({message:'Every score must be between 1 and 10.'});const [team,judge]=await Promise.all([Team.findById(teamId),Judge.findById(judgeId)]);if(!team||!judge)return res.status(404).json({message:'Team or judge not found.'});const score=await Score.findOneAndUpdate({team:teamId,judge:judgeId},{team:teamId,judge:judgeId,innovation:values[0],codeQuality:values[1],presentation:values[2],submittedAt:new Date()},{upsert:true,new:true,runValidators:true,setDefaultsOnInsert:true});const leaderboard=await getLeaderboard();emitLeaderboard(leaderboard);res.status(201).json({message:'Score submitted successfully.',score,leaderboard});}catch(e){console.error(e);res.status(500).json({message:'Failed to submit score.'});}}
export async function getScores(req,res){const filter=req.query.judgeId?{judge:req.query.judgeId}:{};res.json(await Score.find(filter).populate('team','teamCode name').populate('judge','name').sort({submittedAt:-1}));}
export async function getLeaderboardController(_req,res){res.json(await getLeaderboard());}
