import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCallGet = {
	operation: ['getAll'],
	resource: ['call'],
};

export const skillGetDescription: INodeProperties[] = [
	{
		displayName: 'Skill',
		name: 'skill',
		type: 'string',
		displayOptions: { show: showOnlyForCallGet },
		default: '',
		description: "The skill to filter by",
	},
];