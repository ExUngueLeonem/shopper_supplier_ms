import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import CatalogList from '../components/Catalog/CatalogList';
import Page from '../Layout/Page'
import { catalogStore } from '../store/CatalogStore';
import { nomenclatureStore } from '../store/NomenclatureStore'
import { popupStore } from '../store/PopupStore';

function CatalogPage() {

    useEffect(() => {
        catalogStore.fetchNomenclatureBySearch({});
    }, [])

    return (
        <Page>
            <CatalogList items={catalogStore.nomenclatureList} />
        </Page>
    )
}

export default observer(CatalogPage)