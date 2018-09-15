interface Interface {
  /** Describes what the interface does. */
  selector: string;
  /** Whether execution flows into this unit or this unit flows out to another. */
  direction: Direction;
  return: Return;
  returnTerm?: Term;
  parameters: Term[];
}

enum Direction {
  INPUT,
  OUTPUT,
}

enum Return {
  /** Method is called to provide a arbitrary return value. */
  VALUE,
  /** Method is called to provide a binary value. */
  BOOLEAN,
  /** Method is a procedure called to mutate state, returning nothing. */
  VOID,
}

interface Term {
  name: string;
  type: TermType;
  optional: boolean;
  /** If within a wrapper that must be interfaced with, e.g. async values. */
  wrapped: boolean;
}

enum TermType {
  /** Simple, unstructured value that's immediately available. */
  VALUE,
  /** The association between key / value is described, not the data itself. */
  MAP,
  /** The elements within a container are described individually. */
  SET,
  LAMBDA,
}