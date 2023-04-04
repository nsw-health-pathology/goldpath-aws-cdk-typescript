import { Construct } from 'constructs';

export interface EnvironmentContext {
    scope: Construct;
    environment: string;
    accountName: string;
    accountId: string;
}
