---
id: map
title: Maps
---

A term can describe not an overall collection, or its individual members, but instead the *way* in which a maps keys and values are related, without saying anything about how many members are in the collection.

For example, the following interface will find the students in the given class that have failing grades and return them as a map of student IDs to the failing grade:

```typescript
public getFailingGrades(classId: number): { [studentId: number]: number }
```

> Get failing grades: class ID / student ID -- grade percentage