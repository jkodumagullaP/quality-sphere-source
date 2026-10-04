import {Queue} from 'bullmq';import {config} from '../config.js';
const connection={url:config.REDIS_URL};export const executionQueue=new Queue('quality-sphere-executions',{connection});export const ingestionQueue=new Queue('quality-sphere-ingestion',{connection});
