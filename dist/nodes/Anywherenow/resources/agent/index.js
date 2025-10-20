"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentDescription = void 0;
const getAgent_1 = require("./getAgent");
const showOnlyForAgents = {
    resource: ['agent'],
};
exports.agentDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAgents,
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get agents',
                description: 'Get many agents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/dashboardservice/api/{{$parameter.uccId}}/agent?includeFormalStopped={{$parameter.includeFormalStopped}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a agent',
                description: 'Get the data of a single agent',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/dashboardservice/api/{{$parameter.uccId}}/agent/{{$parameter.agentSipAddress}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...getAgent_1.includeFormalStopped,
];
//# sourceMappingURL=index.js.map