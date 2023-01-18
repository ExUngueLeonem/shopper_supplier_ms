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