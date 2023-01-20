import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import CartList from '../components/Cart/CartList'
import Page from '../Layout/Page'
import { cartStore } from '../store/CartStore'

function CartPage() {

    useEffect(() => {
        cartStore.getUserCart();
    }, [])

    return (
        <Page>
            {cartStore.cart.suppliers.map(supplier => <CartList key={supplier.id} item={supplier.items} />)}
        </Page>
    )
}

export default observer(CartPage)
