"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anywherenow = void 0;
const agent_1 = require("./resources/agent");
const call_1 = require("./resources/call");
const getShared_1 = require("./resources/shared/getShared");
const queue_1 = require("./resources/queue");
class Anywherenow {
    constructor() {
        this.description = {
            displayName: 'AnywhereNow',
            name: 'anywherenow',
            icon: { light: 'file:anywherenow.svg', dark: 'file:anywherenow.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the AnywhereNow core API',
            defaults: {
                name: 'AnywhereNow',
            },
            usableAsTool: true,
            inputs: ['main'],
            outputs: ['main'],
            credentials: [{ name: 'anywherenowApi', required: true }],
            requestDefaults: {
                baseURL: '={{$credentials.baseurl.replace(new RegExp("/$"), "")}}',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Agent',
                            value: 'agent',
                        },
                        {
                            name: 'Call',
                            value: 'call',
                        },
                        {
                            name: 'Queue',
                            value: 'queue',
                        },
                    ],
                    default: 'agent',
                },
                {
                    displayName: 'UCC Name',
                    name: 'uccId',
                    type: 'string',
                    default: '',
                    description: "The technical UCC name",
                    required: true,
                },
                ...agent_1.agentDescription,
                ...call_1.callDescription,
                ...queue_1.queueDescription,
                ...getShared_1.agentGetDescription,
            ],
        };
    }
}
exports.Anywherenow = Anywherenow;
//# sourceMappingURL=Anywherenow.node.js.map