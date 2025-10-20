import type { INodeProperties } from 'n8n-workflow';

const showOnlyForQueueGet = {
	operation: ['get'],
	resource: ['queue'],
};

export const skillQueueGetDescription: INodeProperties[] = [
	{
		displayName: 'Skill',
		name: 'skill',
		type: 'string',
		displayOptions: { show: showOnlyForQueueGet },
		default: '',
		description: "The skill to filter by",
	},
];