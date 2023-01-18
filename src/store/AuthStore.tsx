import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';
import { ConnectionManager } from '../http/axios';
import { UserInfoType, UserType } from '../types';

import { errorCatch } from './Error';

class AuthStore {
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

    isAuth = false;

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

    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    async login({ login, password, isPersistent }: { login: string, password: string, isPersistent: boolean }) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post('/Account/Auth', { login, password, isPersistent })
            const { userId, isSupplier } = res.data
            localStorage.setItem("token", res.data.token);
            this.setUser({ userId, isSupplier })
            this.setIsAuth(true);
            console.log("login res", res)
            return res
        } catch (error: any) {
            if (error) errorCatch(error);
        }
    }

    async logout() {
        localStorage.removeItem('token');
        this.setIsAuth(false);
        console.log("logout", this.isAuth, localStorage.getItem('token'));
        window.location.href = '/auth';
    }

    // async getUserInfo() {
    //     // setTimeout(async () => {

    //         try {
    //             let res = await ConnectionManager.GetInstance().GetClient().get('/user');
    //             this.userInfo = res.data
    //             // this.setUserInfo(res.data);
    //             return res;
    //         } catch (error: any) {
    //             if (error) errorCatch(error);
    //         }
    //     // }, 200)
    // }

    // errorCatch(error: AxiosError<any>) {
    //     if (error) {
    //         console.error("login", error.message)
    //     }
    // }
}

export const authStore = new AuthStore();