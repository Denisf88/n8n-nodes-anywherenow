import { type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { agentDescription } from './resources/agent';
import { callDescription } from './resources/call';
import { agentGetDescription } from './resources/shared/getShared';
import { queueDescription } from './resources/queue';

export class Anywherenow implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'AnywhereNow',
		name: 'anywherenow',
		icon: { light: 'file:anywherenow.svg', dark: 'file:anywherenow.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the AnywhereNow core API',
		defaults: {
			name: 'AnywhereNow',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'anywherenowApi', required: true }],
		requestDefaults: {
			baseURL: '={{$credentials.baseurl.replace(new RegExp("/$"), "")}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Agent',
						value: 'agent',
					},
					{
						name: 'Call',
						value: 'call',
					},
					{
						name: 'Queue',
						value: 'queue',
					},
				],
				default: 'agent',
			},
			{
				displayName: 'UCC Name',
				name: 'uccId',
				type: 'string',
				default: '',
				description: "The technical UCC name",
				required: true,
			},
			...agentDescription,
			...callDescription,
			...queueDescription,
			...agentGetDescription,
		],
	};
}
