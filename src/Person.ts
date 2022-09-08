import { Address } from './Address.js';

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
