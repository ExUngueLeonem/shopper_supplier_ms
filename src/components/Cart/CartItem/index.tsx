import { observer } from 'mobx-react-lite'
import React from 'react'
import { ICartItem } from '../../../types'

function CartItem({ item }: { item: ICartItem }) {

    const {
        id,
        name,
        price,
        cost,
        image,
        amount,
    } = item

    return (
        <div>
            <div>
                name {name}
            </div>
            <div>
                price {price}
            </div>
            <div>
                cost {cost}
            </div>
            <div>
                image {image}
            </div>
            <div>
                amount {amount}
            </div>
        </div>
    )
}

export default observer(CartItem)