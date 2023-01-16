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

    async login({ login, password }: { login: string, password: string }) {
        try {
            let res = await ConnectionManager.GetInstance().GetClient().post('/Account/Auth', { login, password })
            const { userId, isSupplier } = res.data
            this.setUser({ userId, isSupplier })
            localStorage.setItem("token", res.data.token);
            return res
        } catch (error: any) {
            if (error) this.arrCatch(error);
        }
    }

    arrCatch(error: AxiosError<any>) {
        if (error) {
            console.error("login", error.message)
        }
    }
}

export const authStore = new AuthStore();