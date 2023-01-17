import React, { useEffect } from 'react'
import Page from '../Layout/Page'
import { authStore } from '../store/AuthStore'

export default function UserPage() {

    useEffect(() => {
        authStore.getUserInfo();
    })

    return (
        <Page>
            <div>index</div>
        </Page>
    )
}
