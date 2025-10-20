import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAgentGet = {
	operation: ['get'],
	resource: ['agent','call'],
};

export const agentGetDescription: INodeProperties[] = [
	{
		displayName: 'Agent SIP Address',
		name: 'agentSipAddress',
		type: 'string',
		displayOptions: { show: showOnlyForAgentGet },
		default: '',
		description: "The agent's SIP address to retrieve",
	},
];
