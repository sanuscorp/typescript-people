import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * Given a file path pointing to JSON, return the parsed JSON object or array.
 * @param path The path to the file
 * @returns A Promise resolving to the object or array in the
 * contained JSON file.
 */
async function readJson(path) {
    const content = await readFile(path, 'utf8');
    try {
        return JSON.parse(content);
    } catch (err) {
        console.error(`Error parsing JSON from file ${path}: ${err}`);
        throw new Error(`Cannot parse ${path} as JSON: ${err.message}`);
    }
}

/**
 * Given a path to a directory, return an array with the contents of all JSON
 * files in that directory
 * @param directoryPath The path to the directory.
 * @returns An array of promises resolving to an array of objects or arrays, one
 * for each of the JSON files found in the referenced directory.
 */
export async function readAllFiles(directoryPath) {
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
