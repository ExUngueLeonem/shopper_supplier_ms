import { observer } from 'mobx-react-lite';
import React from 'react';
import { nomenclatureStore } from '../../store/NomenclatureStore';
import { popupStore } from '../../store/PopupStore';
import { ICatalogItem } from '../../types';
import ProductFrom from './ProductFrom/ProductFrom';

const ShowForm = () => {

    const { formType } = popupStore.showPopup

    switch (formType) {
        case "newProduct": return <ProductFrom onSubmit={(values: ICatalogItem) : Promise<any> => nomenclatureStore.createProduct(values)} />
        case "product": return <ProductFrom onSubmit={(values: ICatalogItem) : Promise<any> => nomenclatureStore.updateProduct(values)} />

        default: return <></>
    }

};

export default observer(ShowForm);