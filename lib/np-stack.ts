import * as cdk from 'aws-cdk-lib';

import { EnvironmentConfig, getEnvironment } from './config/config.factory';

import { Construct } from 'constructs';
import { Infrastructure } from './config/infrastructure';

export class NpStack extends cdk.Stack {
  protected readonly config: EnvironmentConfig;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.config = getEnvironment(props?.env?.account || 'N/A');

    // Here we register the team infrastructure in the stack
    new Infrastructure(this, this.config);
  }
}

