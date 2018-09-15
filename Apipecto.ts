/** Interfaces are always called and this describes what the call does. */
enum CallType {
  /** Provides no return value and is called to mutate state. */
  PROCEDURE,
  /** Provides a boolean return value. */
  PREDICATE,
  /** Provides an arbitrary return value. */
  FUNCTION,
}

/**
 * There are several kinds of terms that can be given to or returned from an
 * interface.
 *
 */
enum DataType {
  /**
   * This term is a simple value not packaged within a higher-level data
   * structure.
   * 
   * Note that lists are considered raw, not a separate type. Only when
   * packaged in a more complex set like a tuple or mapping is a separate type
   * used.
   */
  RAW,
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

interface Interface {
  /** Description of what the interface does */
  selector: string;
  /** What the interface does when called */
  callType: CallType;
  /** If not a void return, what is the term being returned. */
  parameters: Term[];
  returnValue?: Term;
}

/** A term is data provided to or returned from an interface. */
interface Term {
  /** Description of what the the term is providing */
  selector: string;
  /** The way in which data is delivered */
  dataType: DataType;
  /** If the term can be omitted */
  optional: boolean;
  /** If the data is wrapped in a container that resolves at a later time. */
  async: boolean;
}

/**
 * A lambda is an interface being treated like a term, i.e. being provided to
 * or being returned from another interface.
 *
 * There are four types based on things going into and out of the interface.
 *
 * |   Name    | Params | Return |
 * | :-------: | :----: | :----: |
 * |   Block   |        |        |
 * | Callback  |   Y    |        |
 * | Transform |   X    |   X    |
 * |  Getter   |        |   X    |
 *
 * Note that there's no special distinction to procedure lambdas, unlike
 * procedure interfaces.
 */
interface LambdaTerm extends Term, Interface {
  selector: string;
  dataType: DataType.LAMBDA;
  parameters: Term[];
  returnValue?: Term;
}

var a: LambdaTerm = {
  selector: 'asdf',
  dataType: DataType.LAMBDA,
  callType: CallType.PROCEDURE,
  optional: false,
  async: false,
  parameters: [],
  returnValue: undefined,
};