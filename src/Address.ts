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
