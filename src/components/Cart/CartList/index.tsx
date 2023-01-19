import { observer } from 'mobx-react-lite';
import React from 'react';
import { CartItemType } from '../../../types/';
import CartItem from '../CartItem';

function CartList({ item }: { item: CartItemType[] }) {
    return (
        <div>
            {item.map( cartItem => {
                return (
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
            })}
        </div>
    )
}

export default observer(CartList)