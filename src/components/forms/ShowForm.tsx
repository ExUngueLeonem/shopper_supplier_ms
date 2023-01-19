import { observer } from 'mobx-react-lite';
import React from 'react';
import { popupStore } from '../../store/PopupStore';
import ProductFrom from './ProductFrom/ProductFrom';

const ShowForm = () => {

    const { formType } = popupStore.showPopup

    switch (formType) {
        case "newProduct": return <ProductFrom onSubmit={(values) => { console.log("newProduct form values", values  )}} />
        case "product": return <ProductFrom onSubmit={() => { }} />

        default: return <></>
    }



};

export default observer(ShowForm);