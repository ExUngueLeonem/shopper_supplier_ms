import classNames from 'classnames';
import React from 'react'
import { popupStore } from '../../store/PopupStore';
import { userStore } from '../../store/UserStore'

import styles from './User.module.scss';

function SupplierItem() {
    const {
        id,
        name,
        inn,
        email,
        phone,
    } = userStore.userInfo

    return (
        <div>
            <>
                Supplier:
            </>

            <>
                <div>
                    {userStore.currentSupplier.name}
                </div>
                <div>
                    {userStore.currentSupplier.address}
                </div>
                <div>
                    {userStore.currentSupplier.phone}
                </div>
                <div>
                    {userStore.currentSupplier.inn}
                </div>
            </>

            <button
                className={classNames(styles.item_btn, styles.btn_change)}
            >
                Изменить данные
            </button>
        </div>
    )
}

export default SupplierItem