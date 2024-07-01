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
const inversify_1 = require("inversify");
const mediatr_ts_1 = require("mediatr-ts");
const identifiers_1 = __importDefault(require("../../../config/identifiers"));
const GetAllTodos_query_1 = __importDefault(require("../../../core/application/features/todos/query/getAll/GetAllTodos.query"));
let TodosController = class TodosController {
    constructor(_mediator) {
        this._mediator = _mediator;
        //Because we pass the methods as a call back to express, we need to bind the context of the class
        this.getAll = this.getAll.bind(this);
        this.register = this.register.bind(this);
    }
    async getAll(req, res) {
        const query = new GetAllTodos_query_1.default();
        const todos = await this._mediator.send(query);
        res.json(todos);
    }
    register(req, res) {
        res.send('Todos los usuarios');
    }
};
TodosController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(identifiers_1.default.Mediator)),
    __metadata("design:paramtypes", [mediatr_ts_1.Mediator])
], TodosController);
exports.default = TodosController;
