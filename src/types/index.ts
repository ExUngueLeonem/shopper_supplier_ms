export interface IUser {
    userId: string;
    isSupplier: boolean;
}

export interface IUserInfo {
    id: string,
    name: string,
    inn: string,
    email: string,
    phone: string
}

export interface ISupplier extends IUserInfo{
    removed: boolean;
    description: string;
    address: string;
}

export interface ICatalogItem {
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

export interface IOrder {
    id: string;
    number: number;
    correlationOrderId: string;
    created: string;
    delivered: string | null;
    status: string;
    customer: ICustomer;
    supplier: {
        id: string;
        name: string;
    }
}

interface ICustomer extends IUserInfo {
    address: IAddressItem;
}


export interface ICart {
    id: string;
    suppliers: ICartSupplier[]
}

export interface ICartSupplier {
    id: string;
    name: string;
    items: ICartItem[]
}

export interface ICartItem {
    id: string;
    name: string;
    price: number,
    cost: number,
    image: string | null;
    amount: number,
}

export interface IAddresses {
    addresses: IAddressItem[];
    default: string;
    id: string;
}

export interface IAddressItem {
    id?: string;
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
