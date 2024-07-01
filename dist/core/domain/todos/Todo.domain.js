"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoDomain {
    constructor(properties) {
        this._id = properties.id;
        this._start = properties.start;
        this._end = properties.end;
        this._title = properties.title;
        this._description = properties.description;
        this._completed = properties.completed;
    }
    //#region getters and setters
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get start() {
        return this._start;
    }
    set start(value) {
        this._start = value;
    }
    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get completed() {
        return this._completed;
    }
    set completed(value) {
        this._completed = value;
    }
}
exports.default = TodoDomain;
