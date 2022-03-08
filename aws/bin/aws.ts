import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsStack } from '../lib/aws-stack';


const stackName = process.env['STACK_NAME']
// to set stackName (in terminal) run: 
// export STACK_NAME='CLEAR-###'


const app = new cdk.App();
new AwsStack(app, 'AwsStack', { 
    stackName: stackName?.toLowerCase()
    
});