/**
 * This type categorizes interfaces based on what do when they are called.
 *
 * Some combinations are not used. Getters, which provide values with no
 * parameters are considered the same as properties, which aren't described by
 * Apipecto.
 */
enum CallType {
  /**
   * Procedures mutate state.
   *
   * - Can take inputs.
   * - Never returns an output.
   * - Always mutates state.
   */
  PROCEDURE,
  /**
   * Functions transform inputs into outputs.
   *
   * - Always takes inputs.
   * - Always returns an output.
   * - May or may not also mutate state.
   */
  FUNCTION,
  /**
   * Provide a switch.
   *
   * - Can take inputs.
   * - Always returns a boolean output.
   * - May or may not also mutate state.
   */
  PREDICATE,
}

/**
 * This type categorizes the kinds of terms that can be given to or returned
 * from an interface.
 *
 * Some data structures aren't represented. Lists are treated as raw types but
 * described as plural.
 */
enum DataType {
  /**
   * Simple values aren't packaged within high-level data structures.
   * 
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

/** A callable endpoint that mutates state and / or transforms data. */
interface Interface {
  /** The name you use when calling the interface */
  selector: string;
  /** What the interface does when called */
  callType: CallType;
  parameters: Term[];
  /** If not a void return, what is the term being returned. */
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