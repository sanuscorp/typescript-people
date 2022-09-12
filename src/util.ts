import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Person, assertPerson } from './Person.js';

/**
 * Given a file path pointing to JSON, return the parsed JSON object or array.
 * @param path The path to the file
 * @returns A Promise resolving to the object or array in the
 * contained JSON file.
 */
async function readJson(path: string): Promise<{}> {
    const content = await readFile(path, 'utf8');
    try {
        return JSON.parse(content);
    } catch (err: any) {
        console.error(`Error parsing JSON from file ${path}: ${err}`);
        throw new Error(`Cannot parse ${path} as JSON: ${err.message}`);
    }
}

/**
 * Given a path to a directory, return an array with the contents of all JSON
 * files in that directory
 * @param {string} directoryPath The path to the directory
 * @returns {Promise<({} | [])[]>} An array of promises resolving to an array of
 * objects or arrays, one for each of the JSON files found in the referenced
 * directory.
 */
async function readAllFiles(directoryPath: string): Promise<{}[]> {
    const statResult = await stat(directoryPath);
    if (!statResult.isDirectory()) {
        const message = `The given path, "${directoryPath}", is not a directory.`;
        throw new Error(message);
    }

    const fileList = await readdir(directoryPath);

    const promises = fileList.map(async (entry) => {
        const entryPath = resolve(directoryPath, entry);
        return readJson(entryPath);
    });
    return Promise.all(promises);
}

/**
 * Given a path to a directory, return an array of People instances, one for
 * each JSON file in that directory.
 *
 * This function explicitly declares to any caller that returned array contains
 * only Person instances.  As a result, the TypeScript compiler can perform
 * static analysis on any caller of this method to ensure it is using the
 * returned array correctly.
 *
 * @param directoryPath The path to the directory containing JSON files
 * that describe People instances.
 * @returns An array of Person instances
 */
export async function readAllPeople(directoryPath: string): Promise<Person[]> {
    const results = await readAllFiles(directoryPath);

    const people: Person[] = [];
    results.forEach((result) => {
        assertPerson(result);
        people.push(result);
    });

    return people;
}
