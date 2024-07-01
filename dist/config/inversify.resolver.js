"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InversifyResolver {
    constructor(container) {
        this.container = container;
    }
    resolve(name) {
        return this.container.get(name);
    }
    add(name, instance) {
        this.container.bind(name).to(instance);
    }
    remove(name) {
        // not necessary- can be blank, never called by the lib, for debugging / testing only
        this.container.unbind(name);
    }
    clear() {
        // not necessary- can be blank, never called by the lib, for debugging / testing only
        this.container.unbindAll();
    }
}
exports.default = InversifyResolver;
