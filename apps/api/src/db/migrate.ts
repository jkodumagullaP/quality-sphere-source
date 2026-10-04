import {readFile,readdir} from 'node:fs/promises';import {resolve} from 'node:path';import {pool} from './pool.js';
const dir=resolve(process.cwd(),'../../packages/database/migrations');
for(const file of (await readdir(dir)).filter(x=>x.endsWith('.sql')).sort()){const sql=await readFile(resolve(dir,file),'utf8');try{await pool.query(sql);console.log(JSON.stringify({level:'info',event:'migration.applied',file}))}catch(e:any){if(e.code==='42P07'||e.code==='23505')console.log(JSON.stringify({level:'info',event:'migration.skipped',file}));else throw e}}
await pool.end();
