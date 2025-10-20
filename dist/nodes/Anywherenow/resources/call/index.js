"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callDescription = void 0;
const getCall_1 = require("./getCall");
const showOnlyForCalls = {
    resource: ['call'],
};
exports.callDescription = [
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
    ...getCall_1.skillGetDescription,
];
//# sourceMappingURL=index.js.map