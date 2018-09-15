/** What part of the data is described? */
enum DescriptionType {
  /* A boolean */
  SWITCH,
  /* Single thing, primitive or container */
  SINGLE,
  /** Each member of a collection */
  MEMBERS,
  /** The association of the constituent parts */
  ASSOCIATION,
}

interface Term {
  optional: boolean;
  callable: boolean;
  async: boolean;
}

interface Behavior {
  selector?: string;
  inputs: Term[];
  output?: Term;
  pureFunction: boolean;
}

interface Data extends Term {
  description: string;
  descriptionType: DescriptionType;
  callable: false;
}

interface Lambda extends Term, Behavior {
  callable: true;
}

const block: Lambda = {
  optional: false,
  callable: true,
  async: false,
  inputs: [],
  output: undefined,
  pureFunction: false,
};