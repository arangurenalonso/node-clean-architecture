"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const identifiers_1 = __importDefault(require("./config/identifiers"));
const DependencyContainer_1 = __importDefault(require("./config/DependencyContainer"));
const mediatr_ts_1 = require("mediatr-ts");
const inversify_resolver_1 = __importDefault(require("./config/inversify.resolver"));
async function main() {
    const dependencyContainer = new DependencyContainer_1.default();
    const container = dependencyContainer.container();
    mediatr_ts_1.mediatorSettings.resolver = new inversify_resolver_1.default(container);
    const server = container.get(identifiers_1.default.ExpressServer);
    await server.start();
}
(async () => {
    await main();
})();
