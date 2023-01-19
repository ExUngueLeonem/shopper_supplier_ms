import { makeAutoObservable } from "mobx";
import { ConnectionManager } from "../http/axios";
import { IAddresses } from "../types";
import { errorCatch } from "./Error";

class AddressesStore {

    addresses: IAddresses = {
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

    setAddresses(addresses: IAddresses) {
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