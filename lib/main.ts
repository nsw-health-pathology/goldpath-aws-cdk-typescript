import * as cdk from 'aws-cdk-lib';
import { Infrastructure } from './entities/infrastructure';

const app = new cdk.App();

{
    const ProdStackId = 'My-Infrastructure-Pd';
    new Infrastructure(
        {
            scope: app,
            environment: 'pd',
            accountName: 'account',
            accountId: '1234567890123',
        },
        {
            stackId: ProdStackId,
        },
    );
}