# TypeScript People

This repository serves as a conversation piece to introduce some TypeScript 
concepts.

## Getting Started

### Requirements

- Node 16.X (install from [nodejs.org](https://nodejs.org/en/))
- Git & a GitHub Account (if you want to clone & play along)

### What It Provides

- `bin` - a directory containing a CLI, `run.js`
- `data` - a directory storing JSON files that describe people
- `src` - a directory containing the implementation of this basic app

### Setup

1. Clone this repository
2. Run `npm start`

## What It Does

The initial state of this repository provides a basic CLI that will print out
information from JSON files stored in the `data` directory.  For instance:

```bash
$ npm start

> typescript-people@1.0.0 start
> bin/run.js

People (Data Directory /home/pwagener/Devel/typescript-people/data):
    Cooper "Coop" Wagener from Brooklyn
    Kimi "Door Destroyer" Wagener from Greenville
    Peter "Pedro" Wagener from Brooklyn

```

Add more files to `data`, re-run the CLI, and you should see more results.

The purpose of this as a starting point is to work through the process of 
evolving the JavaScript code into TypeScript, demonstrating the following:

1. Adding TypeScript dependency & scripts; Using JavaDoc comments for types
2. Create TypeScript interfaces to describe data types; explore generated files
3. Converting `*.js` files to `*.ts` files
4. Using Type Guards to perform type validation of non-typed inputs
