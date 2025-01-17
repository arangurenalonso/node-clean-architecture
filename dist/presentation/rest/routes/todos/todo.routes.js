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
exports.TodoRoutes = void 0;
const identifiers_1 = __importDefault(require("../../../../config/identifiers"));
const todos_controller_1 = __importDefault(require("../../../rest/controllers/todos.controller"));
const express_1 = require("express");
const inversify_1 = require("inversify");
let TodoRoutes = class TodoRoutes {
    constructor(_router, _todosController) {
        this._router = _router;
        this._todosController = _todosController;
        this.initRoutes();
        this._router = this._router.bind(this);
    }
    initRoutes() {
        this._router.get('/', this._todosController.getAll);
        this._router.post('/', this._todosController.register);
    }
    get router() {
        return this._router;
    }
};
exports.TodoRoutes = TodoRoutes;
exports.TodoRoutes = TodoRoutes = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(identifiers_1.default.Router)),
    __param(1, (0, inversify_1.inject)(identifiers_1.default.TodosController)),
    __metadata("design:paramtypes", [Function, todos_controller_1.default])
], TodoRoutes);
exports.default = TodoRoutes;
