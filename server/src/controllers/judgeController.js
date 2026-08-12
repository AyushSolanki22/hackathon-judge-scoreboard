import Judge from '../models/Judge.js';
export async function getJudges(_req,res){res.json(await Judge.find().sort({name:1}));}
export async function createJudge(req,res){const {name}=req.body;if(!name)return res.status(400).json({message:'Judge name is required.'});res.status(201).json(await Judge.create({name}));}
