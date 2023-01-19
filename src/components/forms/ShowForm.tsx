import React from 'react';
import { popupStore } from '../../store/PopupStore';
import ProductFrom from './ProductFrom/ProductFrom';

const ShowForm = () => {

    const { formType } = popupStore.showPopup

    switch (formType) {
        case "newProduct": return <ProductFrom onSubmit={() => { }} />
        case "product": return <ProductFrom onSubmit={() => { }} />

        default: return <></> 
    }



};

export default ShowForm;