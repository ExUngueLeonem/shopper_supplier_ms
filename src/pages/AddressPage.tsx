import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import AddressItem from '../components/AddressItem';
import Page from '../Layout/Page'
import { addressesStore } from '../store/AddressesStore'

function AddressPage() {

    useEffect(() => {
        addressesStore.getAddresses();
    }, [])

    return (
        <Page>
            {addressesStore.addresses.addresses.map(item => <AddressItem key={item.id} item={item} />)}
        </Page>
    )
}

export default observer(AddressPage);