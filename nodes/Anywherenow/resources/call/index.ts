import type { INodeProperties } from 'n8n-workflow';
import { skillGetDescription } from './getCall';

const showOnlyForCalls = {
	resource: ['call'],
};

export const callDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCalls,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get calls',
				description: 'Get many calls',
				routing: {
					request: {
						method: 'GET',
						url: '=/dashboardservice/api/{{$parameter.uccId}}/calls/{{$parameter.skill}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an agents calls',
				description: 'Get all calls of a single agent',
				routing: {
					request: {
						method: 'GET',
						url: '=/dashboardservice/api/{{$parameter.uccId}}/calls/{{$parameter.agentSipAddress}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...skillGetDescription,
];
