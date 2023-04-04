import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { REGION, REPO, SOLUTION } from '../constants';
import { Stack, Tags } from 'aws-cdk-lib';
import { EnvironmentContext } from '../model/context';
import { User } from 'aws-cdk-lib/aws-iam';

interface InfrastructureProps {
    stackId: string;
}

export class Infrastructure extends Stack {
    constructor(ctx: EnvironmentContext, props: InfrastructureProps) {
        super(ctx.scope, props.stackId, {
            stackName: `${SOLUTION}-${ctx.environment}-stack`,
            env: {
                account: ctx.accountId || 'unknown account id', // Always some value
                region: REGION,
            },
        });

        ctx.scope = this;

        /** Example bucker */
        new Bucket(ctx.scope, 'example-bucket', {
            bucketName: `nswhp-${ctx.accountName}-${SOLUTION}-bucket`,
            versioned: true,
            enforceSSL: true,
            encryption: BucketEncryption.S3_MANAGED,
            blockPublicAccess: {
                blockPublicAcls: true,
                ignorePublicAcls: true,
                blockPublicPolicy: true,
                restrictPublicBuckets: true,
            },
        });

        /** Example user */
        new User(
            ctx.scope,
            `nswhp-${ctx.accountName}-${SOLUTION}-user`,
        );

        Tags.of(this).add('Environment', ctx.environment);
        Tags.of(this).add('Name', `${SOLUTION}-${ctx.environment}`);
        Tags.of(this).add('Solution', SOLUTION);
        Tags.of(this).add('ManagedBy', 'aws-cdk');
        Tags.of(this).add('Repo', REPO);
    }
}
