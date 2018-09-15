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
   * Predicates provide a switch.
   *
   * - Can take inputs.
   * - Always returns a boolean output.
   * - May or may not also mutate state.
   */
  PREDICATE,
}

enum LambdaType {
  BLOCK,
  CALLBACK,
  TRANSFORM,
  GETTER,
}

enum NameType {
  /** A cohesive value is described. */
  SINGLE,
  /** Individual members of a collection are described. */
  COLLECTION,
  /** The association between members of a collection is described. */
  ASSOCIATION,
}

/** A callable endpoint that mutates state and / or transforms data. */
interface Interface {
  /** This is how you call the interface. */
  name: string;
  /** What the interface does when called */
  callType: CallType;
  parameters: Term[];
  /** If not a void return, what is the term being returned. */
  returnValue?: Term;
}

/** A term is data provided to or returned from an interface. */
interface Term {
  /** This is what data the term provides. */
  name: string;
  /** This is how the name is describing the data. */
  nameType: NameType;
  /** Whether or not this term represents an interface which can be called. */
  callable: boolean;
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
  name: string;
  nameType: NameType.LAMBDA;
  parameters: Term[];
  returnValue?: Term;
}

var a: LambdaTerm = {
  name: 'asdf',
  nameType: NameType.LAMBDA,
  callType: CallType.PROCEDURE,
  optional: false,
  async: false,
  parameters: [],
  returnValue: undefined,
};