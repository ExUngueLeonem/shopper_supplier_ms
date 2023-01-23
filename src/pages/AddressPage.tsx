import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import AddressItem from '../components/AddressItem';
import Page from '../Layout/Page'
import { addressesStore } from '../store/AddressesStore'
import { popupStore } from '../store/PopupStore';

function AddressPage() {

    useEffect(() => {
        addressesStore.getAddresses();
    }, [])

    const buttons = [
        {
            text: "Добавить адрес",
            onClick: () => popupStore.setShowPopup({formType: 'newAddress'})
        }
    ]

    return (
        <Page buttons={buttons}>
            {addressesStore.addresses.addresses.map(item => <AddressItem key={item.id} item={item} />)}
        </Page>
    )
}

export default observer(AddressPage);