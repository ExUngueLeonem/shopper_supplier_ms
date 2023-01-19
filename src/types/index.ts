export type UserType = {
    userId: string;
    isSupplier: boolean;
}

export type UserInfoType = {
    id: string,
    name: string,
    inn: string,
    email: string,
    phone: string
}

export type SupplierType = {
    name: string;
    address: string;
    phone: string;
    removed: boolean;
    inn: string;
    email: string;
    description: string;
    id: string;
}

export type CatalogItemType = {
    parent: string | null;
    name: string;
    description: string | null;
    type: string;
    measure: string;
    images: string | null;
    article: number;
    removed: boolean;
    price: number;
    supplierId: string;
    id: string;
}

export type OrderType = {
    id: string;
    number: number;
    correlationOrderId: string;
    created: string;
    delivered: string | null;
    status: string;
    customer: {
        id: string;
        name: string;
        inn: string;
        email: string;
        phone: string;
        address: {
            city: string;
            street: string;
            house: string;
            index: number | null;
            building: string | null;
            flat: string | null;
            entrance: string | null;
            floor: string | null;
            doorPhone: string | null;
        }
    },
    supplier: {
        id: string;
        name: string;
    }
}

export type CartType = {
    id: string;
    suppliers: CartSupplierType[]
}

export type CartSupplierType = {
    id: string;
    name: string;
    items: CartItemType[]
}

export type CartItemType = {
    id: string;
    name: string;
    price: number,
    cost: number,
    image: string | null;
    amount: number,
}

export type AddressesType = {
    addresses: AddressItemType[];
    default: string;
    id: string;
}

export type AddressItemType = {
    id: string;
    city: string;
    street: string;
    house: string;
    index: number | null;
    building: string | null;
    flat: string | null;
    entrance: string | null;
    floor: string | null;
    doorPhone: string | null;
}
