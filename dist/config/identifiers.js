"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TYPES = {
    Application: Symbol.for('Application'),
    ApiRouter: Symbol.for('ApiRouter'),
    TodoRoutes: Symbol.for('TodoRoutes'),
    TodosController: Symbol.for('TodosController'),
    ExpressServer: Symbol.for('ExpressServer'),
    Router: Symbol.for('Router'),
    Mediator: Symbol.for('Mediator'),
    ITodoRepository: Symbol.for('ITodoRepository'),
    EnvironmentConfig: Symbol.for('EnvironmentConfig'),
};
exports.default = TYPES;
