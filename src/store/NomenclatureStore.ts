import { makeAutoObservable } from "mobx";
import { ConnectionManager } from "../http/axios";
import { ICatalogItem } from "../types";
import { errorCatch } from "./Error";

class NomenclatureStore {

    nomenclatureList: ICatalogItem[] = [
        {
            parent: null,
            name: "",
            description: null,
            type: "",
            measure: "",
            images: null,
            article: 0,
            removed: false,
            price: 0,
            supplierId: "",
            id: ""
        }
    ]

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setNomenclatureList(nomenclatureList: ICatalogItem[]) {
        this.nomenclatureList = nomenclatureList
    }

    async getNomenclatureBySupplier(supplierId: string) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get(`/catalog/${supplierId}`);
            this.setNomenclatureList(res.data);
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    async getNomenclatureBySearch({ page, count }: { page?: number; count?: number }) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get(`/catalog`, { params: { page, count } });
            this.setNomenclatureList(res.data);
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    // async createProduct({product: }) {
    //     try {
    //         // {
    //         //     "name":"pizza 4 cshf",
    //         //     "type":"product",
    //         //     "description":"",
    //         //     "measure":"шт",
    //         //     "price":200
    //         // }

    //         let res = await ConnectionManager.GetInstance().GetClient().get(`/catalog`, { params: { page, count } });
    //         this.setNomenclatureList(res.data);
    //         return res;
    //     } catch (error: any) {
    //         if (error) errorCatch(error);
    //     }
    // }


}

export const nomenclatureStore = new NomenclatureStore();