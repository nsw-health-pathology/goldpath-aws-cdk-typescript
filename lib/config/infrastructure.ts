import { Construct } from 'constructs';
import { EnvironmentConfig } from './config.factory';
import { TaggingService } from '../tagging';
import { Tags } from 'aws-cdk-lib';

export class Infrastructure extends Construct {
    constructor(scope: Construct, envConfig: EnvironmentConfig) {
        super(scope, envConfig.name);

        // Tag all the resources
        new TaggingService(envConfig).staticTags().forEach(t => Tags.of(this).add(t.key, t.value));
    }
}