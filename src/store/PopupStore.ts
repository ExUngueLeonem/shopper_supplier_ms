import { makeAutoObservable } from 'mobx';

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