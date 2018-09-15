interface Interface {
  /** Describes what the interface does. */
  selector: string;
  /** Whether execution flows into this unit or this unit flows out to another. */
  direction: Direction;
  return: Return;
  /** If not a void return, what is the term being returned. */
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

/**
 * There are several kinds of terms that can be given to or returned from an
 * interface.
 *
 * Not that lists aren't a separate type; one value of type X is described the
 * same way as a several X in a list. Only when packaged in a more complex set
 * like a tuple or mapping is a separate type used.
 */
enum TermType {
  /**
   * This term is a simple value not packaged within a higher-level data
   * structure.
   */
  VALUE,
  /**
   * One or more values is packaged within a data structure where there's some
   * kind of ordering process. But rather than describe the overall data
   * structure as a single thing, the individual elements within it are being
   * broken out because describing the top-level structure isn't useful.
   */
  SET,
  /**
   * The term is packaged within a data structure where key names are associated
   * with values. The *association* between the two is being described rather
   * than the actual values.
   */
  MAP,
  /**
   * The term is itself another interface that is callable, possibly returning
   * its own values.
   */
  LAMBDA,
}

/**
 * A callable term.
 *
 * Unlike interfaces, there's no special distinction for returning booleans.
 *
 * |   Name    | Params | Return |
 * | :-------: | :----: | :----: |
 * |   Block   |        |        |
 * | Callback  |   Y    |        |
 * | Transform |   X    |   X    |
 * |  Getter   |        |   X    |
 */
interface Lambda {
  params: boolean;
  return: boolean;
}