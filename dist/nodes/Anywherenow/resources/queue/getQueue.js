"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillQueueGetDescription = void 0;
const showOnlyForQueueGet = {
    operation: ['get'],
    resource: ['queue'],
};
exports.skillQueueGetDescription = [
    {
        displayName: 'Skill',
        name: 'skill',
        type: 'string',
        displayOptions: { show: showOnlyForQueueGet },
        default: '',
        description: "The skill to filter by",
    },
];
//# sourceMappingURL=getQueue.js.map