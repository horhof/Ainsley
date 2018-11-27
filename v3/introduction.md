---
id: introduction
title: Introduction
---

Apipecto is a notation for describing the API of units of code. The goal is to know at a glance how the unit is supposed to be used.

## Why?

The API *could* be could be described just by copying all the method signatures / function prototypes. For example:

* sslEnabled(): boolean
* haveCertificate(): boolean
* installCertificate(certText: string): boolean

But camel-cased phrases with lots of types and punctuation aren't easy to read and most of the detail there isn't necessary. All you need is just the bare minimum to know what the interface does.

## What?

APIs ultimately comprise just data and behavior. Each method that a unit exposes is a behavior called a [method](method.md). The method receives zero or more incoming [terms of data](term.md) as *parameters* and sends back zero or more terms of data as a *returns*. Methods aren't the only behavior because a term can be a [lambda](lambda.md), which is a behavior passed around like a piece of data.
