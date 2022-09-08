import path from 'node:path';
import { readAllFiles } from './util.js';

export async function run(){
    const dataDir = path.resolve(`.`, 'data');
    const out = console.log;

    out(`People (Data Directory ${dataDir}):`);

    const people = await readAllFiles(dataDir);
    people.forEach((/** @type {any} */ person) => {
        const { firstName, lastName, nickname, address: { city } } = person;
        out(`    ${firstName} "${nickname}" ${lastName} from ${city}`);
    });

    out(``);
}
