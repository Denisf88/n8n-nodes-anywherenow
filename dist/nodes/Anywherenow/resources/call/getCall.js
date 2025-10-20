"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillGetDescription = void 0;
const showOnlyForCallGet = {
    operation: ['getAll'],
    resource: ['call'],
};
exports.skillGetDescription = [
    {
        displayName: 'Skill',
        name: 'skill',
        type: 'string',
        displayOptions: { show: showOnlyForCallGet },
        default: '',
        description: "The skill to filter by",
    },
];
//# sourceMappingURL=getCall.js.map