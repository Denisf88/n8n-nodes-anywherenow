import type { INodeProperties } from 'n8n-workflow';
import { skillQueueGetDescription } from './getQueue';

const showOnlyForQueue = {
	resource: ['queue'],
};

export const queueDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForQueue,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get queues',
				description: 'Get many calls',
				routing: {
					request: {
						method: 'GET',
						url: '=/dashboardservice/api/{{$parameter.uccId}}/queue',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get queue by skill',
				description: 'Filter queues by skill',
				routing: {
					request: {
						method: 'GET',
						url: '=/dashboardservice/api/{{$parameter.uccId}}/queue/{{$parameter.skill}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...skillQueueGetDescription,
];
