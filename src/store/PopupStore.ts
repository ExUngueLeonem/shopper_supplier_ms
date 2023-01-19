import { makeAutoObservable } from 'mobx';

interface IShowPopupType {
    formType:
    "" |
    "product" |
    "newProduct"
}

class PopupStore {

    showPopup: IShowPopupType = {
        formType: ""
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setShowPopup(showPopup: IShowPopupType) {
        this.showPopup = showPopup;
    }

    closeForm() {
        this.setShowPopup({formType: ""});
    }

}

export const popupStore = new PopupStore();