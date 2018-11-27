---
id: method
title: Methods
---

Methods are actions that a unit can perform. They expose these actions as goals that other units want to achieve. Those other units call the method in order to achieve the goal.

Methods are distinguished from one another by their name, called a *selector*.

## Returns

### Styles

```
getUserZipCode(userId: number): string
```

* Equals sign:
  * Get user ZIP code: ID = string
* An arrow:
  * Get available users -> Zip codes[]

* Get available users -> [Zip codes]