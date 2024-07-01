"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const inversify_1 = require("inversify");
const identifiers_1 = __importDefault(require("../../config/identifiers"));
const api_router_1 = __importDefault(require("./routes/api.router"));
const EnvironmentConfig_1 = __importDefault(require("../../config/EnvironmentConfig"));
let ExpressServer = class ExpressServer {
    constructor(_app, _apiRouter, _environmentConfig) {
        this._app = _app;
        this._apiRouter = _apiRouter;
        this._environmentConfig = _environmentConfig;
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    initializeMiddlewares() {
        this._app.use(express_1.default.json());
        this._app.use(express_1.default.urlencoded({ extended: true }));
        this._app.use(express_1.default.static(this._environmentConfig.publicPath));
    }
    initializeRoutes() {
        this._app.use('/api', this._apiRouter.router);
        this._app.get('*', (req, res) => {
            const indexPath = path_1.default.join(__dirname, `../../${this._environmentConfig.publicPath}`, 'index.html');
            res.sendFile(indexPath);
        });
    }
    async start() {
        this._app.listen(this._environmentConfig.port, () => {
            console.log(`Server running at ${this._environmentConfig.port}`);
        });
    }
};
ExpressServer = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(identifiers_1.default.Application)),
    __param(1, (0, inversify_1.inject)(identifiers_1.default.ApiRouter)),
    __param(2, (0, inversify_1.inject)(identifiers_1.default.EnvironmentConfig)),
    __metadata("design:paramtypes", [Function, api_router_1.default,
        EnvironmentConfig_1.default])
], ExpressServer);
exports.default = ExpressServer;
