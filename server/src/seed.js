import 'dotenv/config';import mongoose from 'mongoose';import connectDB from './config/db.js';import Team from './models/Team.js';import Judge from './models/Judge.js';
await connectDB();await Team.deleteMany({});await Judge.deleteMany({});
await Team.insertMany(['Code Catalysts','Byte Builders','Tech Titans','InnovateX','Logic Legends','Dev Dynamos','Pixel Pioneers','Stack Squad','Future Forge','Digital Minds'].map((name,i)=>({teamCode:`T${String(i+1).padStart(2,'0')}`,name})));
await Judge.insertMany([{name:'Judge A'},{name:'Judge B'},{name:'Judge C'}]);console.log('Seed data inserted.');await mongoose.disconnect();
