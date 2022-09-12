import { Address, isAddress } from './Address.js';
import { AssertionError } from 'assert';
import * as util from 'util';

/**
 * The Person interface describes an object that contains information about a
 * given person.
 */
export interface Person {
    /**
     * The given name of a person.
     */
    firstName: string;

    /**
     * The family name of a person.
     */
    lastName: string;

    /**
     * The nickname of a person, if any.
     */
    nickname: string;

    /**
     * The mailing address to associate with this person.
     */
    address: Address;
}

/**
 * A Type Guard for the Person interface.
 *
 * @param obj The object to determine if it meets the Person interface or not.
 */
export function isPerson(obj: unknown): obj is Person {
    if (typeof obj !== `object` || obj === null) {
        return false;
    }

    const partial = obj as Partial<Person>;
    return typeof partial.firstName === `string`
        && typeof partial.lastName === `string`
        && typeof partial.nickname === `string`
        && isAddress(partial.address);
}

/**
 * A Type Assertion for the Person interface.
 *
 * @param obj The object to assert is a Person.
 * @throws AssertionError if `obj` is not a Person.
 */
export function assertPerson(obj: unknown): asserts obj is Person {
    if (!isPerson(obj)) {
        throw new AssertionError({
            message: `Object is not person: ${util.inspect(obj)}`,
        });
    }
}
