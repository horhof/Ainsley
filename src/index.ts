import { Interface, Term, DescType } from "./Apipecto";

class Iface implements Interface {
  selector = '';

  inputs: Term[] = [];

  output?: Term;

  pureFunction = false;

  get isProcedure() {
    return !this.output;
  }

  get isPredicate() {
    return this.output && this.output.descType === DescType.SWITCH;
  }

  get isFunction() {
    return this.hasInputs && Boolean(this.output);
  }

  private get identifier(): string {
    return this.selector.replace(/ (\w)/g, '$1');
  }

  private get hasInputs(): boolean {
    return this.inputs.length > 0;
  }

  private get inputList(): string {
    return this.inputs.map(input => input.desc).join(', ');
  }

  constructor(i: Interface) {
    this.selector = i.selector;
    this.inputs = i.inputs;
    this.output = i.output;
    this.pureFunction = i.pureFunction;
  }

  render(): string {
    if (this.isPredicate) {
      return `${this.identifier}?`;
    }


    if (this.isProcedure) {
      return `${this.identifier}: ${this.inputList}`;
    }
    else { // ifFunction
      if (!this.output)
        return ''

      if (this.output.descType === DescType.IMPLICIT) {
        return `${this.identifier}: ${this.inputList}`;
      }
      else {
        return `${this.identifier}: ${this.inputList} = ${this.output.desc}`;
      }
    }
  }
}

// - Create HTTP request: URI
const interface00: Interface = {
  selector: 'Create HTTP request',
  inputs: [{
    desc: 'URI',
    descType: DescType.SINGLE,
    optional: false,
    callable: false,
    async: false,
  }],
  output: {
    descType: DescType.SINGLE,
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

/*
const block: Lambda = {
  optional: false,
  callable: true,
  async: false,
  inputs: [],
  output: undefined,
  pureFunction: false,
};
*/