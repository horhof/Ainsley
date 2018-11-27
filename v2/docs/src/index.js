"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Apipecto_1 = require("./Apipecto");
class Iface {
    constructor(i) {
        this.selector = '';
        this.inputs = [];
        this.pureFunction = false;
        this.selector = i.selector;
        this.inputs = i.inputs;
        this.output = i.output;
        this.pureFunction = i.pureFunction;
    }
    get isProcedure() {
        return !this.output;
    }
    get isPredicate() {
        return this.output && this.output.descType === Apipecto_1.DescType.SWITCH;
    }
    get isFunction() {
        return this.hasInputs && Boolean(this.output);
    }
    get identifier() {
        return this.selector.replace(/ (\w)/g, '$1');
    }
    get hasInputs() {
        return this.inputs.length > 0;
    }
    get inputList() {
        return this.inputs.map(input => input.desc).join(', ');
    }
    render() {
        if (this.isPredicate) {
            return `${this.identifier}?`;
        }
        if (this.isProcedure) {
            return `${this.identifier}: ${this.inputList}`;
        }
        else {
            if (!this.output)
                return '';
            if (this.output.descType === Apipecto_1.DescType.IMPLICIT) {
                return `${this.identifier}: ${this.inputList}`;
            }
            else {
                return `${this.identifier}: ${this.inputList} = ${this.output.desc}`;
            }
        }
    }
}
const interface00 = {
    selector: 'Create HTTP request',
    inputs: [{
            desc: 'URI',
            descType: Apipecto_1.DescType.SINGLE,
            optional: false,
            callable: false,
            async: false,
        }],
    output: {
        descType: Apipecto_1.DescType.SINGLE,
        desc: 'constructed request',
        optional: false,
        callable: false,
        async: false,
    },
    pureFunction: false,
};
const x = new Iface(interface00);
console.log(x.isProcedure);
console.log(x.isPredicate);
console.log(x.isFunction);
console.log(x.render());
