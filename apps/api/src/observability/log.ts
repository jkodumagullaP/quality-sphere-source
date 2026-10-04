import pino from 'pino';import {config} from '../config.js';
export const log=pino({level:config.LOG_LEVEL,redact:{paths:['req.headers.authorization','req.headers.cookie','password','passwordHash','token','csrf'],censor:'[REDACTED]'},base:{service:'quality-sphere-api',version:'3.0.0-alpha.1'}});
