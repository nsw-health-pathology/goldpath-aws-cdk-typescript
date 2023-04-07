import { EnvironmentConfig } from './config/config.factory';

import { NswhpEnvironment } from './constants';
import { Tag } from 'aws-cdk-lib';

export class TaggingService {
    private readonly costCenter: string;
    private readonly serviceOffering = 'Genomics';
    private readonly reason = 'https://confluence.pathology.health.nsw.gov.au/display/GEN/Genomics+-+Solution+Architecture';
    private readonly environment: NswhpEnvironment;
    private readonly support: string;
    private readonly supportContact: string;

    /**
     * Constructor to accept the common team parameters that all resources will have
     */
    constructor(envConfig: EnvironmentConfig) {
        this.support = envConfig.support;
        this.supportContact = envConfig.supportContact;
        this.costCenter = envConfig.costCenter;
        this.environment = envConfig.environmentNameLong;
    }

    /**
     * Produce our standardised tagging for resource infrastructure in line with
     * https://confluence.pathology.health.nsw.gov.au/display/EA/Logical+Data+Centre+Reference+Architecture#LogicalDataCentreReferenceArchitecture-ResourceTaggingStandards
     */
    static generate(resourceName: string): Tag[] {
        return [
            new Tag('Name', resourceName),
        ];
    }

    /**
     * Tags that are considered static for the team-environment. All cloud resources for this team 
     * should receive these same tags.
     * @returns 
     */
    staticTags(): Tag[] {
        return [
            new Tag('CostCenter', this.costCenter),
            new Tag('Environment', this.environment),
            new Tag('ServiceOffering', this.serviceOffering),
            new Tag('Support', this.support),
            new Tag('SupportContact', this.supportContact),
            new Tag('Reason', this.reason),
        ];
    }
} 
