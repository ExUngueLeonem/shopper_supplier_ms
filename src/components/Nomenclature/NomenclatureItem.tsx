import classNames from 'classnames';
import { observer } from 'mobx-react-lite'
import React from 'react'
import { popupStore } from '../../store/PopupStore';
import { ICatalogItem } from '../../types'

import styles from './Nomenclature.module.scss';

type Props = {
  item: ICatalogItem
}

function NomenclatureItem({ item }: Props) {
  return (
    <div key={item.id} className={styles.item} >
      {/* 
        parent?: string;
        name: string;
        measure: string;
        description?: string;
        type?: string;
        images?: string;
        article?: number | null;
        removed?: boolean;
        price?: number;
        supplierId?: string;
        id?: string; 
      */}
      {item.name}
      {item.type}
      {item.article}
      {item.price}
      {item.removed ?? "Удален"}
      <div className={styles.btn_wrapper}>
        <button onClick={() => popupStore.setShowPopup({ formType: 'product', initialFormData: item })} className={classNames(styles.item_btn, styles.btn_change)}>
          Изменить
        </button>

        <button onClick={() => { }} className={classNames(styles.item_btn, styles.btn_delete)}>
          Удалить
        </button>
      </div>

    </div>)
}

export default observer(NomenclatureItem);
