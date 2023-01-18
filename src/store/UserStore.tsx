import { makeAutoObservable } from 'mobx';
import { ConnectionManager } from '../http/axios';
import { UserInfoType, UserType } from '../types';
import { errorCatch } from './Error';

class UserStore {
    user: UserType = {
        userId: '',
        isSupplier: false,
    };

    userInfo: UserInfoType = {
        id: "",
        name: "",
        inn: "",
        email: "",
        phone: ""
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setUser(user: UserType) {
        this.user = user;
        console.log("AuthStore", this.user)
    }

    setUserInfo(userInfo: UserInfoType) {
        this.userInfo = userInfo
    }

    async getUserInfo() {
        // setTimeout(async () => {

            try {
                let res = await ConnectionManager.GetInstance().GetClient().get('/user');
                this.userInfo = res.data
                // this.setUserInfo(res.data);
                return res;
            } catch (error: any) {
                if (error) errorCatch(error);
            }
        // }, 200)
    }

    async getCurrentSuplier() {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().get('/suppliers');
            this.suppliers = res.data
            // this.setUserInfo(res.data);
            return res;
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

}

export const userStore = new UserStore();