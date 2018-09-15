interface Interface {
  /** Describes what the interface does. */
  selector: string;
  returnBehavior: ReturnBehavior;
  /** If not a void return, what is the term being returned. */
  parameters: Term[];
  returnTerm?: Term;
}

/**
 * Interfaces 
 */
enum ReturnBehavior {
  /** Provides a arbitrary return value. */
  FUNCTION,
  /** Provides a boolean return value. */
  PREDICATE,
  /** Provides no return value and is called to mutate state. */
  PROCEDURE,
}

/**
 * A description of data provided to or returned from an interface.
 */
interface Term {
  selector: string;
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
 * A callable term, which shares many things with interfaces because they are
 * themselves a kind of interface treated as a term.
 *
 * There are four general types based on if they take parameters or return
 * values.
 *
 * |   Name    | Params | Return |
 * | :-------: | :----: | :----: |
 * |   Block   |        |        |
 * | Callback  |   Y    |        |
 * | Transform |   X    |   X    |
 * |  Getter   |        |   X    |
 *
 * Note that unlike interfaces, there's no special distinction for BOOLEAN
 * return types.
 */
interface LambdaTerm extends Interface, Term {
  selector: string;
  type: TermType.LAMBDA;
  parameters: Term[];
  /** If not a void return, what is the term being returned. */
  returnTerm?: Term;
}

var a: LambdaTerm = {
  type: TermType.LAMBDA,
  optional: false,
  wrapped: false,
  selector: 'asdf',
  parameters: [],
  returnBehavior: ReturnBehavior.PROCEDURE,
};