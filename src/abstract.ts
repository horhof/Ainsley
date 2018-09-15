import { Term } from "./Apipecto";

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