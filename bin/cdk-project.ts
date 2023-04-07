#!/usr/bin/env node

import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';

import { C } from '../lib/constants';
import { NpStack } from '../lib/np-stack';
import { PdStack } from '../lib/pd-stack';

const app = new cdk.App();

new NpStack(app, 'Stack-np', {
  stackName: 'SOLUTION',
  env: { account: C.AWS_ACCOUNTS.NP, region: C.AWS_REGION },
  terminationProtection: true,
});

new PdStack(app, 'Stack-pd', {
  stackName: 'SOLUTION',
  env: { account: C.AWS_ACCOUNTS.PD, region: C.AWS_REGION },
  terminationProtection: true,
});
