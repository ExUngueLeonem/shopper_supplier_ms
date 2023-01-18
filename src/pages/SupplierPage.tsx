import React, { useEffect } from 'react'
import Page from '../Layout/Page'
import { authStore } from '../store/AuthStore';
import { userStore } from '../store/UserStore';

export default function SupplierPage() {

    useEffect(() => {
        userStore.getUserInfo();
    })


    return (
        <Page>
            <div>index</div>
        </Page>
    )
}
