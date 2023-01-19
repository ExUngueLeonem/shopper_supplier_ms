import { makeAutoObservable } from "mobx";
import { ConnectionManager } from "../http/axios";
import { OrderType } from "../types";
import { errorCatch } from "./Error";

class OrderStore {
    orderList: OrderType[] = [{
        id: "",
        number: 0,
        correlationOrderId: "",
        created: "",
        delivered: null,
        status: "",
        customer: {
            id: "",
            name: "",
            inn: "",
            email: "",
            phone: "",
            address: {
                city: "",
                street: "",
                house: "",
                index: null,
                building: null,
                flat: null,
                entrance: null,
                floor: null,
                doorPhone: null
            }
        },
        supplier: {
            id: "",
            name: "",
        }
    }]

    setOrderList(orderList: OrderType[]) {
        this.orderList = orderList
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    //       /orders?dateFrom=2022-10-12&dateTo=2023-12-31&type=Outgoing

    async getOrders({ dateFrom, dateTo, type }: { dateFrom?: string; dateTo?: string; type?: string; }) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get(`/orders`, { params: { dateFrom, dateTo, type } });
            this.setOrderList(res.data);
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }
}

export const orderStore = new OrderStore();