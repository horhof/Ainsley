import * as abstract from "./abstract";

export interface Data extends abstract.BasicTerm {
  desc?: string;
  descType: abstract.DescType;
  callable: false;
}

export interface Lambda extends abstract.BasicTerm, abstract.Behavior {
  callable: true;
}

export type Term = Data | Lambda;

export type Interface = abstract.Behavior