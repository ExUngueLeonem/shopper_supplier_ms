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
                items: []
            }
        ]
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setCart(cart: ICart) {
        this.cart = cart
    }

    async getUserCart() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/basket');
            this.setCart(res.data)
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }


    async addToCart( id: string, amount: number, ) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post('/basket', { id, amount });
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }


    // {
    //     "id": "6242da88-7062-408e-b845-6dc83e146a3f",
    //     "supplierId": "{{supplierId}}",
    //     "amount":3
    // }

}

export const cartStore = new CartStore();