import { makeAutoObservable } from "mobx";
import { ConnectionManager } from "../http/axios";
import { ICatalogItem } from "../types";
import { errorCatch } from "./Error";
import { userStore } from "./UserStore";

class NomenclatureStore {

    nomenclatureList: ICatalogItem[] = [
        // {
        //     parent: "",
        //     name: "",
        //     description: "",
        //     type: "",
        //     measure: "",
        //     images: "",
        //     article: 0,
        //     removed: false,
        //     price: 0,
        //     supplierId: "",
        //     id: ""
        // }
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

    async createProduct( product: ICatalogItem ) {
        // {{url}}/catalog/{{supplierId}}
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post(`/catalog/${userStore.currentSupplier.id}`,  product );
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }


}

export const nomenclatureStore = new NomenclatureStore();