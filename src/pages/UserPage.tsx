import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import Page from '../Layout/Page'
import { authStore } from '../store/AuthStore'
import { userStore } from '../store/UserStore';

function UserPage() {

    useEffect(() => {
        userStore.getUserInfo();
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
            <div>index</div>
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
        </Page>
    )
}

export default observer(UserPage);