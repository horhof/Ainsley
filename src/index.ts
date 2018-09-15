import * as abstract from "./abstract";
import { Interface, Lambda, Term } from "./Apipecto";

interface Block extends Lambda {
  selector: string;
  input: [];
  output: undefined;
  pureFunction: false;
}

interface Callback extends Lambda {
  selector: undefined;
  input: Term[];
  output: undefined;
  pureFunction: false;
}

interface Transform extends Lambda {
  selector: undefined;
  input: Term[];
  output: Term;
  pureFunction: true;
}

// - Create HTTP request: URI
const interface00: Interface = {
  selector: 'Create HTTP request',
  inputs: [{
    desc: 'URI',
    descType: abstract.DescType.SINGLE,
    optional: false,
    callable: false,
    async: false,
  }],
  output: {
    descType: abstract.DescType.IMPLICIT,
    optional: false,
    callable: false,
    async: false,
  },
  pureFunction: false,
};

const block: Lambda = {
  optional: false,
  callable: true,
  async: false,
  inputs: [],
  output: undefined,
  pureFunction: false,
};