import { C } from '../constants';

export interface EnvironmentConfig {
    accountNameQualified: string;
    accountNameShort: string;
    accountId: string;
    environmentNameLong: 'nonprod' | 'prod'
    environmentNameShort: 'np' | 'pd';
    costCenter: string;
    name: string;
    support: string;
    supportContact: string;
}

export const getEnvironment = (accountId: string): EnvironmentConfig => {
    switch (accountId) {
        case C.AWS_ACCOUNTS.NP:
            return {
                accountNameQualified: 'awpmc-genomics-np',
                accountNameShort: 'genomicsnp',
                accountId: C.AWS_ACCOUNTS.NP,
                environmentNameLong: 'nonprod',
                environmentNameShort: 'np',
                costCenter: '123456',
                name: 'project',
                support: 'NSWHP DevOps',
                supportContact: 'NSWPATH-DEVOPS@health.nsw.gov.au',
            };
        case C.AWS_ACCOUNTS.PD:
            return {
                accountNameQualified: 'awpmc-genomics-pd',
                accountNameShort: 'genomicspd',
                accountId: C.AWS_ACCOUNTS.PD,
                environmentNameLong: 'prod',
                environmentNameShort: 'pd',
                costCenter: '123456',
                name: 'project',
                support: 'NSWHP DevOps',
                supportContact: 'NSWPATH-DEVOPS@health.nsw.gov.au',
            };
        default:
            throw Error('Missing for accountId: ' + accountId);
    }
};

