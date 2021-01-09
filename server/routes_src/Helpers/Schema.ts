interface User {
    username: string,
    email: string,
    password: string,
    type: "Individual" | "Organization",
}

interface Request {
    id: string,
    /**
     * Refers to the id of a User
     */
    submitter: string,
    item: string,
    description: string,
    quantity: number,
    unit: "Kilograms" | "Containers" | "Milliliters" | "Each",
    fulfilled: boolean,
    timestamp: number
}