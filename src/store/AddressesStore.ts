import { makeAutoObservable } from "mobx";
import { ConnectionManager } from "../http/axios";
import { IAddresses, IAddressItem } from "../types";
import { errorCatch } from "./Error";

class AddressesStore {

    addresses: IAddresses = {
        addresses: [
            // {
            //     id: "",
            //     city: "",
            //     street: "",
            //     house: "",
            //     index: 0,
            //     building: "",
            //     flat: "",
            //     entrance: "",
            //     floor: "",
            //     doorPhone: "",
            // }
        ],
        default: "",
        id: "",
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setAddresses(addresses: IAddresses) {
        this.addresses = addresses
    }

    async getAddresses() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/address')
            this.setAddresses(res.data)
            return res
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    async updateAddress(address: IAddressItem) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post('/address', address)
            return res
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    async createAddress(address: IAddressItem) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post('/address', address)
            this.setAddresses(res.data)
            return res
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    async deleteAddress(id: string) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().delete('/address', { data: { id } })
            this.setAddresses(
                {
                    addresses: this.addresses.addresses.filter((item: IAddressItem) => item.id !== id),
                    default: this.addresses.default,
                    id: this.addresses.id,
                })

            return res
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }
}

export const addressesStore = new AddressesStore();