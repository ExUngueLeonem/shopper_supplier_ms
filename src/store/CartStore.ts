import { makeAutoObservable } from 'mobx';
import { ConnectionManager } from '../http/axios';
import { ICart } from '../types';
import { errorCatch } from './Error';

class CartStore {

    cart: ICart = {
        id: "",
        suppliers: [
            {
                id: "",
                name: "",
                items: [
                    {
                        id: "",
                        name: "",
                        price: 0,
                        cost: 0,
                        image: null,
                        amount: 0
                    }
                ]
            }
        ]
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setCart(cart: ICart) {
        this.cart = cart
    }

    async getSuppliersList() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/basket');
            this.setCart(res.data)
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

}

export const cartStore = new CartStore();