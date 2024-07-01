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
const express_1 = require("express");
const todo_routes_1 = __importDefault(require("./todos/todo.routes"));
const inversify_1 = require("inversify");
const identifiers_1 = __importDefault(require("../../../config/identifiers"));
let ApiRouter = class ApiRouter {
    constructor(_router, todoRoutes) {
        this._router = _router;
        this.todoRoutes = todoRoutes;
        this.init();
        this._router = this._router.bind(this);
    }
    init() {
        this._router.use('/todo', this.todoRoutes.router);
    }
    get router() {
        return this._router;
    }
};
ApiRouter = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(identifiers_1.default.Router)),
    __param(1, (0, inversify_1.inject)(identifiers_1.default.TodoRoutes)),
    __metadata("design:paramtypes", [Function, todo_routes_1.default])
], ApiRouter);
exports.default = ApiRouter;
