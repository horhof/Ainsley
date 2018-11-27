---
id: introduction
title: Introduction
---

Apipecto is a notation for describing the public API of a unit of code. The goal is to know at a glance how the unit is supposed to be used.

See [the SSL keychain example](ssl-example.md).

## What?

A unit’s API is just a list of available goals. Apipecto has a set of entries, each called an *interface*, to describe each [method](method.md) (and possibly [properties](property.md)) on the unit.

A method receives zero or more incoming [terms of data](term.md) as *parameters* and sends back zero or more terms of data as a *returns*. (Methods aren’t the only behavior because a term can be a [lambda](lambda.md), which is a behavior passed around like a piece of data.)

Each interface describes the method, its parameters, returns, and other special features.

## Why?

The API *could* be could be described just by copying all the method signatures or function prototypes into the documentation:

* isSslEnabled(): boolean
* installCert(certText: string): ErrorCode | undefined

But using the exact representation of the code (with camel-cased phrases, types, and lots of symbols) in the documentation isn't ideal. It's not necessary to be that exact and it's hard to read. Consider instead regular language with a few symbols and conventions:

* Is SSL enabled?
* Install certificate: text / (error code)

Apipecto aims to be formal enough with its conventions that its interface descriptions could generate (or come close) the method signatures in the code, but minimal enough that each interface can be used as a documentation heading without looking too technical.