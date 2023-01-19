import { makeAutoObservable } from 'mobx';
import { ConnectionManager } from '../http/axios';
import { CartType } from '../types';
import { errorCatch } from './Error';

type ShowPopupType = {
    formType:
    "" |
    "product" |
    "newProduct"
}

class PopupStore {

    showPopup: ShowPopupType = {
        formType: ""
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setShowPopup(showPopup: ShowPopupType) {
        this.showPopup = showPopup
    }

    closeForm() {
        this.setShowPopup({formType: ""})
    }

}

export const popupStore = new PopupStore();