"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includeFormalStopped = void 0;
const showOnlyForAgentGetAll = {
    operation: ['getAll'],
    resource: ['agent'],
};
exports.includeFormalStopped = [
    {
        displayName: 'Include Formal Stopped',
        name: 'includeFormalStopped',
        type: 'boolean',
        displayOptions: { show: showOnlyForAgentGetAll },
        default: false
    },
];
//# sourceMappingURL=getAgent.js.map