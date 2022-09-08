#!/usr/bin/env -S node --no-warnings --loader ts-node/esm
import { run } from '../src/showPeople.js';

await run();