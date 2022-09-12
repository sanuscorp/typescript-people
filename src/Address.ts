/**
 * A mailing address.
 */
export interface Address {
    /**
     * The street component of an Address
     */
    street: string;

    /**
     * The city component of an Address
     */
    city: string;

    /**
     * The state component of an Address
     */
    state: string;

    /**
     * The ZIP code component of an address
     */
    zip: string;
}

/**
 * A Type Guard for the Address interface.
 *
 * @param obj The object to determine if it meets the Address interface or not.
 */
export function isAddress(obj: unknown): obj is Address {
    if (typeof obj !== `object` || obj === null) {
        return false;
    }

    const partial = obj as Partial<Address>;
    return typeof partial.street === `string`
        && typeof partial.city === `string`
        && typeof partial.state === `string`
        && typeof partial.zip === `string`;
}
