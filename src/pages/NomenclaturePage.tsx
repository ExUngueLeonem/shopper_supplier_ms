import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import Page from '../Layout/Page'
import { nomenclatureStore } from '../store/NomenclatureStore'

function NomenclaturePage() {
    useEffect(() => {
        nomenclatureStore.getNomenclatureBySearch();
    }, [])

    console.log("nomenclatureList", toJS(nomenclatureStore.nomenclatureList))

    return (
        <Page>
            {nomenclatureStore.nomenclatureList.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </Page>
    )
}

export default observer(NomenclaturePage)