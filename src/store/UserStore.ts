import { makeAutoObservable } from 'mobx';
import { ConnectionManager } from '../http/axios';
import { UserInfoType, UserType, SupplierType } from '../types';
import { errorCatch } from './Error';

class UserStore {

    userInfo: UserInfoType = {
        id: "",
        name: "",
        inn: "",
        email: "",
        phone: ""
    }

    currentSupplier: SupplierType = {
        name: "",
        address: "",
        phone: "",
        removed: false,
        inn: "",
        email: "",
        description: "",
        id: ""
    }

    supplierList: SupplierType[] = [
        {
            name: "",
            address: "",
            phone: "",
            removed: false,
            inn: "",
            email: "",
            description: "",
            id: ""
        }
    ]

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setUserInfo(userInfo: UserInfoType) {
        this.userInfo = userInfo
    }

    setCurrentSupplier(currentSupplier: SupplierType) {
        this.currentSupplier = currentSupplier
    }

    setSupplierList(supplierList: SupplierType[]) {
        this.supplierList = supplierList
    }

    async getUserInfo() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/user');
            this.setUserInfo(res.data)
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    async getSuppliersList() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/suppliers');
            this.setSupplierList(res.data)
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

}

export const userStore = new UserStore();