/** What part of the data is described? */
export enum DescType {
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

export interface Behavior {
  selector?: string;
  inputs: Term[];
  output?: Term;
  pureFunction: boolean;
}

export interface BasicTerm {
  optional: boolean;
  callable: boolean;
  async: boolean;
}

export interface Data extends BasicTerm {
  desc?: string;
  descType: DescType;
  callable: false;
}

export interface Lambda extends BasicTerm, Behavior {
  desc: undefined;
  descType: undefined;
  callable: true;
}

export type Term = Data | Lambda;

export interface Interface extends Behavior {
  selector: string;
}

/*
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
*/