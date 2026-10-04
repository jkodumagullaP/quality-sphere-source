export const executionStatuses=['READY','QUEUED','RUNNING','PASSED','FAILED','SKIPPED','BLOCKED','CANCELLED'] as const;
export type ExecutionStatus=typeof executionStatuses[number];
export const permissions=['organizations.manage','programs.manage','projects.read','projects.manage','requirements.read','requirements.create','requirements.update','requirements.approve','scenarios.read','scenarios.create','cases.read','cases.create','cases.approve','executions.read','executions.run','executions.cancel','defects.read','defects.create','defects.assign','defects.transition','reports.view','reports.export','users.manage','roles.manage','audit.view','backup.create','backup.restore','workers.manage'] as const;
export type Permission=typeof permissions[number];
export type RequestContext={requestId:string;correlationId:string;userId:string;organizationId:string;projectIds:string[];permissions:Permission[]};
export type QueueExecution={executionId:string;projectId:string;type:'UI'|'API'|'PERFORMANCE'|'SECURITY'|'MOBILE';correlationId:string};
