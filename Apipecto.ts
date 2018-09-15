/** What part of the data is described? */
enum DescType {
  /* The data is already implied in the selector. */
  IMPLICIT,
  /* A boolean */
  SWITCH,
  /* Single thing, primitive or container */
  SINGLE,
  /** Each member of a collection */
  MEMBERS,
  /** The association of the constituent parts */
  ASSOCIATION,
}

interface Behavior {
  selector?: string;
  inputs: Term[];
  output?: Term;
  pureFunction: boolean;
}

interface BasicTerm {
  optional: boolean;
  callable: boolean;
  async: boolean;
}

interface Data extends BasicTerm {
  desc?: string;
  descType: DescType;
  callable: false;
}

interface Lambda extends BasicTerm, Behavior {
  callable: true;
}

type Term = Data | Lambda;

type Interface = Behavior

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
const interface00: Behavior = {
  selector: 'Create HTTP request',
  inputs: [{
    desc: 'URI',
    descType: DescType.SINGLE,
    optional: false,
    callable: false,
    async: false,
  }],
  output: {
    descType: DescType.IMPLICIT,
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