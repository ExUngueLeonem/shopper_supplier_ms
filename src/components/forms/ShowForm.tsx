import { observer } from 'mobx-react-lite';
import React from 'react';
import { addressesStore } from '../../store/AddressesStore';
import { nomenclatureStore } from '../../store/NomenclatureStore';
import { popupStore } from '../../store/PopupStore';
import { ICatalogItem } from '../../types';
import AddressForm from './AddressForm/AddressForm';
import OrderForm from './OrderForm/OrderForm';
import ProductFrom from './ProductFrom/ProductFrom';

const ShowForm = () => {

    const { formType } = popupStore.showPopup

    switch (formType) {
        case "newProduct": return <ProductFrom onSubmit={(values: ICatalogItem) : Promise<any> => nomenclatureStore.createProduct(values)} />
        case "product": return <ProductFrom onSubmit={(values: ICatalogItem) : Promise<any> => nomenclatureStore.updateProduct(values)} />

        case "newOrder": return <OrderForm onSubmit={(values: ICatalogItem) : Promise<any> => nomenclatureStore.updateProduct(values)} />

        case "newAddress": return <AddressForm onSubmit={(values: ICatalogItem) : Promise<any> => addressesStore.createAddress(values)} />

        default: return <></>
    }

};

export default observer(ShowForm);