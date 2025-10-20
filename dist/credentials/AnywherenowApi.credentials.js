"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnywherenowApi = void 0;
class AnywherenowApi {
    constructor() {
        this.name = 'anywherenowApi';
        this.displayName = 'Anywherenow API';
        this.documentationUrl = 'https://golive.anywhere.now/api/core/core_rest_api.html';
        this.properties = [
            {
                displayName: 'BaseUrl',
                name: 'baseurl',
                type: 'string',
                required: true,
                default: 'https://<your_service_fqdn>',
            },
        ];
    }
}
exports.AnywherenowApi = AnywherenowApi;
//# sourceMappingURL=AnywherenowApi.credentials.js.map