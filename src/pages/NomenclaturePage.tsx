import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import ProductFrom from '../components/forms/ProductFrom/ProductFrom';
import Page from '../Layout/Page'
import { nomenclatureStore } from '../store/NomenclatureStore'
import { popupStore } from '../store/PopupStore';

function NomenclaturePage() {
    useEffect(() => {
        nomenclatureStore.getNomenclatureBySearch({});
    }, [])

    console.log("nomenclatureList", toJS(nomenclatureStore.nomenclatureList))

    const buttons = [
        {
            text: "Создать товар",
            onClick: () => { popupStore.setShowPopup({formType: 'newProduct'}) }
        }
    ]
    // icon?: string;
    // text?: string;
    // onClick?: () => void;
    // buttons?: ButtonInfo[];
    // visible?: boolean;

    return (
        <Page buttons={buttons}>
            {nomenclatureStore.nomenclatureList?.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </Page>
    )
}

export default observer(NomenclaturePage)