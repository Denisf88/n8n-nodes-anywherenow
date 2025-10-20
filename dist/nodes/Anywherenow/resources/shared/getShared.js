"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentGetDescription = void 0;
const showOnlyForAgentGet = {
    operation: ['get'],
    resource: ['agent', 'call'],
};
exports.agentGetDescription = [
    {
        displayName: 'Agent SIP Address',
        name: 'agentSipAddress',
        type: 'string',
        displayOptions: { show: showOnlyForAgentGet },
        default: '',
        description: "The agent's SIP address to retrieve",
    },
];
//# sourceMappingURL=getShared.js.map