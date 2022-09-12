import path from 'node:path';
import { readAllPeople } from './util.js';
import { Person } from './Person.js';

export async function run() {
    const dataDir = path.resolve(`.`, 'data');
    const out = console.log;

    out(`People (Data Directory ${dataDir}):`);

    const people = await readAllPeople(dataDir);
    people.forEach((person: Person) => {
        const {
            firstName,
            lastName,
            nickname,
            address: {
                city,
                street,
                zip
            },
        } = person;
        out(`    ${firstName} "${nickname}" ${lastName} from ${street}, ${city}, ${zip}`);
    });

    out(``);
}
