import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';
import { ConnectionManager } from '../http/axios';
import { UserType } from '../types';



class AuthStore {
    user: UserType = {
        userId: '',
        isSupplier: false,
    };

    isAuth = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setUser(user: UserType) {
        this.user = user;
        console.log("AuthStore", this.user)
    }

    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    async login({ login, password }: { login: string, password: string }) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post('/Account/Auth', { login, password })
            const { userId, isSupplier } = res.data
            this.setUser({ userId, isSupplier })
            this.setIsAuth(true);
            localStorage.setItem("token", res.data.token);
            console.log("login res", res)
            return res
        } catch (error: any) {
            if (error) this.arrCatch(error);
        }
    }

    async logout() {
        localStorage.removeItem('token');
        this.setIsAuth(false);
        console.log("logout", this.isAuth, localStorage.getItem('token'));
        window.location.href = '/auth';
    }

    arrCatch(error: AxiosError<any>) {
        if (error) {
            console.error("login", error.message)
        }
    }
}

export const authStore = new AuthStore();