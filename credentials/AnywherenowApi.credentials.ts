/* eslint-disable @n8n/community-nodes/credential-test-required */

/* eslint-disable @n8n/community-nodes/icon-validation */
import type {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AnywherenowApi implements ICredentialType {
	name = 'anywherenowApi';

	displayName = 'Anywherenow API';

	// Link to your community node's README
	documentationUrl = 'https://golive.anywhere.now/api/core/core_rest_api.html';

	properties: INodeProperties[] = [
		{
			displayName: 'BaseUrl',
			name: 'baseurl',
			type: 'string',
			required: true,
			default: 'https://<your_service_fqdn>',
		},
	];

}
