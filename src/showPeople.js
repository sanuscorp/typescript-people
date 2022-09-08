import path from 'node:path';
import { readAllPeople } from './util.js';

/**
 * @typedef { import('./Person.js').Person } Person
 */

export async function run(){
    const dataDir = path.resolve(`.`, 'data');
    const out = console.log;

    out(`People (Data Directory ${dataDir}):`);

    const people = await readAllPeople(dataDir);
    people.forEach((/** @type {Person} */ person) => {
        const { firstName, lastName, nickname, address: { city } } = person;
        out(`    ${firstName} "${nickname}" ${lastName} from ${city}`);
    });

    out(``);
}
