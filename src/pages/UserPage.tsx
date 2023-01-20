import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import Page from '../Layout/Page'
import { authStore } from '../store/AuthStore'
import { userStore } from '../store/UserStore';

function UserPage() {

    useEffect(() => {
        userStore.getUserInfo();
        userStore.getCurrentSupplier();
    }, [])

    const {
        id,
        name,
        inn,
        email,
        phone,
    } = userStore.userInfo

    return (
        <Page>

            <>
                User:
            </>

            <div>
                id {id}
            </div>
            <div>
                name  {name}
            </div>
            <div>
                inn  {inn}
            </div>
            <div>
                email   {email}
            </div>
            <div>
                phone  {phone}
            </div>




        <>
        <br />
        <br />
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

        </Page>
    )
}

export default observer(UserPage);