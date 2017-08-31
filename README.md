# Ainsley

## Interface

```bnf
interface ::= property | method outputs?
```

A single interface is either a property or a method. If a method then a further list of outputs from that method may follow.

## Properties

```bnf
property ::= selector '?'?
```

Properties describe data. Boolean properties are followed by a question mark.

```typescript
// Unite
public unite: string

// Afternoon visit
public afternoonVisit: number

// Visible?
public visible: boolean
```

## Methods

```bnf
method ::= selector '.' | selector '?' | selector ':' term-list ('.' | '=' term)
```

Methods describe behavior. They may have parameters and may have return values. Methods are sub-divided by what kind of return value they give:

- Procedures: void
- Predicates: boolean
- Functions: everything else

### Procedures

```bnf
method ::= selector (':' term-list)? '.'
```

Procedures are methods returning void. They end with a period, which distinguishes them from properties.

```typescript
// Tank race.
public tankRace(): void
```

**Boolean** parameters are followed by question marks the same as boolean properties. 

```typescript
// Explain truck: neat?.
public explainTruck(neat: boolean): void
```

**Multiple** parameters are separated by commas.

```typescript
// Waste maddening: milky, crown, light.
public wasteMaddening(milky: number, crown: string, light: number): void
```

**Optional** parameters are surrounded by square brackets. Optional boolean parameters include the question park inside the brackets.

```typescript
// Bury crime: trade, [cup].
public buryCrime(trade: Record, cup?: string): void

// Willing bag: [look?].
public willingBag(look?: boolean): void

// Appreciate: handle?, eager.
public appreciate(handle: boolean, eager: number): void
```

### Predicates

```bnf
predicate ::= selector '?' (':' term-list)?
```

Methods that return a boolean are written similarly to boolean properties.

```typescript
// Lacking?
public lacking(): boolean
```

The question mark is part of the selector, so unlike the period for procedures, the question mark for predicates goes before the parameter list.

```typescript
// Turn light?: lumber
public turnLight(lumber: number): boolean
```

The predicate can have boolean parameters, where the question mark is used for it as well as the selector.

```typescript
// Texture report?: pan, puzzled?
public textureReport(pan: number, puzzled: boolean): boolean

// Sense room?: trite?, join
public senseRoom(trite: boolean, join: string)
```

### Functions

```bnf
function ::= selector (':' term-list)? '=' term
```

Functions are methods that return a value that's not boolean. The description of the return value follows an equals sign.

```typescript
// Offer harm = description
public offerHarm(): string

// Deep rest: queen = details of update
public deepRest(queen: string): RecordUpdate
```

**Optional** return values are written similarly to optional parameters.

```typescript
// Unable = record ID if exists
public unable(): number | void
```

## Selectors

```bnf
selector ::= word+
```

Both properties and methods are identified by selectors. The selector must match what's in the code but is uses spaces rather than camel-casing. Acronyms can be capitalized when they're not capitalized within the code.

```typescript
// Fetch file description: filename = descriptor
public fetchFileDescriptor(filename: string): string

// Create HTTP request: URI = request
public createHttpRequest(uri: string): HttpRequest
```

The selector terminates at EOL for properties and at the first punctution mark for methods.

```typescript
// Property name
public propertyName: string

// Delete record: ID.
public deleteRecord(id: number): void

// Is record?
public isRecord(): boolean

// Get increment = number
public getIncrement(): number
```

## Terms

```bnf
term ::= sync-data | async-data | lambda
term-list ::= (term | '[' term ']') (',' (term | '[' term ']'))*
```

Terms are descriptions of data (or code being used as data).

### Synchronous values

```bnf
sync-data ::= word+
```

Just a plain description of what the data represents. Doesn't have to reference the type of the data.

### Asynchronous values

#### Async data

```bnf
async-term ::= '<' word+ '>'
```
Asynchronous data are promises that eventually resolve to the indicated description.

```typescript
// Rigid umbrella: sore? = <user record>
public rigidUmbrella(sore: boolean): Promise<UserRecord>
```

They can be used as parameters although that's rare.

```typescript
// Cause utter: <announce>.
public causeUtter(announce: Promise<number>): void
```

#### Async procedures

```bnf
async-procedure ::= '<' selector '>' (':' term-list)? '.'
```

Asynchronous procedures are functions that promise to return void. Their selectors are surrounded by angle brackets and end with period outside the brackets.

```typescript
// <Stingy cloudy>.
public stingyCloudy(): Promise<void>

// Stingy cloudy.
public stingyCloudySync(): void

// <Pretend lace>: hurt.
public pretendLace(hurt: number): Promise<void>

// Pretend lace sync: hurt.
public pretendLaceSync(hurt: number): void
```

#### Async predicates

```bnf
async-predicate ::= '<' selector '?' '>' (':' term-list)?
```

Asynchronous predicates promise to return a boolean.

```typescript
// <Arm fretful?>
public armFretful(): Promise<boolean>

// Arm fretful sync?
public armFretfulSync(): boolean
```

When parameters are used with async predicates, the parameters follow the brackets.

```typescript
// <Request soda?>: rapid
public requestSoda(rapid: string): Promise<boolean>
```

### Lambdas

```bnf
lambda ::= '{' (selector '!' | term-list | term-list? '=' term) '}'
```

Lambdas are surrounded by curly braces. They could be said to have the following three parts, the same as a method, except each of them is optional.

```
{stick: mellow, ladybug = act}
 ^^^^^    \      /        ^^^
Selector  Parameters      Return value
```

Selectors are generally not useful for lambdas and are mostly omitted. That gives us the following useful patterns.

|    Name     | Select? | Param? | Return? |
| :---------: | :-----: | :----: | :-----: |
|   *done*    |   Yes   |   No   |   No    |
|   *then*    |   No    |  Yes   |   No    |
|  *getter*   |   No    |   No   |   Yes   |
| *transform* |   No    |  Yes   |   Yes   |

**Done** lambdas (or maybe unary lambdas) have no parameters and no return value. They're used for `done` callbacks that indicate when something finished but otherwise delivers no other data. Effectively the selector is used because there's nothing else to describe it.

```typescript
// Label slip: {}.
// Label slip: {done!}.
// Label slip: done!.
public labelSlip(done: () => void): void
```

```typescript
// Remove lock file: {}.
public removeLockFile(done: () => void): void
// Selector: Remove lock file
// Parameters: {}
```

**Then** lambdas accept parameters but return nothing, used for delivering values asynchronously. The selector and the return value are omitted.

```typescript
// Read file: filename, {[error], file contents}.
public readFile(filename: string, done: (err?, data) => void): void
```

**Getters** have no parameters but do have a return value. These must have a closure over some kind of state and use it for their return, else they would be constant functions.

```typescript
// Cast thankful = {= timestamp}
// Cast thankful = {() = timestamp}
public castThankful(): { () => number }
```

**Transforms** take parameters and return values.

```typescript
// Wrap function: {before = after} = {before list = after list}
public mapFunction(fn: Function): Function
```

## Outputs

```bnf
outputs ::= word+ ':' selector (word+ ':' selector)*
```

Outputs describe the outgoing method calls that its parent makes on other objects. Only the first level of calls is described.

```typescript
// <Delete user>: ID.
//   - Database: find user by ID.
//   - Fs: remove file.
public deleteUser(id: number): Promise<void> {
  this.database.findUserById(id)
    .then(user => user.delete())
    .then(user => fs.removeFile(user.logFile))
    .then((err) => {
      if (err)
        throw err;
      this.log(`User removed.`)
    })
}
```

## Symbol index

| Symbols |            Meaning            |
| :-----: | ----------------------------- |
|   `?`   | Ends boolean                  |
|   `.`   | Ends procedure                |
|   `!`   | Ends unary lambdas            |
|   `:`   | Starts parameter list         |
|   `,`   | Separates parameters          |
|   `=`   | Starts return value           |
|  `[ ]`  | Surrounds optional parameters |
|  `{ }`  | Surrounds lambda              |
|  `< >`  | Surrounds asynchronous data   |
