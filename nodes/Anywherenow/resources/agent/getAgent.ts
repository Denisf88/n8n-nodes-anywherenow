import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAgentGetAll = {
	operation: ['getAll'],
	resource: ['agent'],
};

export const includeFormalStopped: INodeProperties[] = [
	{
		displayName: 'Include Formal Stopped',
		name: 'includeFormalStopped',
		type: 'boolean',
		displayOptions: { show: showOnlyForAgentGetAll },
		default: false
	},
];