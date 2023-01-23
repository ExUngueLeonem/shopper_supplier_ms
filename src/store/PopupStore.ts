import { makeAutoObservable } from 'mobx';

interface IShowPopupType {
    formType:
    "" |
    "product" |
    "newProduct" |

    "newAddress" |
    "address" |

    "newOrder"

    ;
    initialFormData?: any;
}

class PopupStore {

    showPopup: IShowPopupType = {
        formType: "",
        initialFormData: {},
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setShowPopup(showPopup: IShowPopupType) {
        console.debug("showPopup", showPopup)
        this.showPopup = showPopup;
    }

    closeForm() {
        this.setShowPopup({ formType: "" });
    }

}

export const popupStore = new PopupStore();