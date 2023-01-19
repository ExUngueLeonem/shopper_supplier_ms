import { makeAutoObservable } from "mobx";
import { ConnectionManager } from "../http/axios";
import { AddressesType } from "../types";
import { errorCatch } from "./Error";

class AddressesStore {

    addresses: AddressesType = {
        addresses: [
            {
                id: "",
                city: "",
                street: "",
                house: "",
                index: null,
                building: null,
                flat: null,
                entrance: null,
                floor: null,
                doorPhone: null,
            }
        ],
        default: "",
        id: "",
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setAddresses(addresses: AddressesType) {
        this.addresses = addresses
    }

    async getAddresses() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/address')
            this.setAddresses( res.data)
            return res
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

}

export const addressesStore = new AddressesStore();