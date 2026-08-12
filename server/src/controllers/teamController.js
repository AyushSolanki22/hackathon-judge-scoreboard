import Team from '../models/Team.js';
export async function getTeams(_req,res){res.json(await Team.find().sort({teamCode:1}));}
export async function createTeam(req,res){const {teamCode,name}=req.body;if(!teamCode||!name)return res.status(400).json({message:'teamCode and name are required.'});res.status(201).json(await Team.create({teamCode,name}));}
