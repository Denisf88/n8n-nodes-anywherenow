"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueDescription = void 0;
const getQueue_1 = require("./getQueue");
const showOnlyForQueue = {
    resource: ['queue'],
};
exports.queueDescription = [
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
    ...getQueue_1.skillQueueGetDescription,
];
//# sourceMappingURL=index.js.map