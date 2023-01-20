import classNames from 'classnames';
import { observer } from 'mobx-react-lite'
import React from 'react'
import { nomenclatureStore } from '../../store/NomenclatureStore';
import { popupStore } from '../../store/PopupStore';
import { ICatalogItem } from '../../types'

import styles from './Catalog.module.scss';

type Props = {
  item: ICatalogItem;
}

function CatalogItem({ item }: Props) {

  

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
      
        <div className={styles.btn_wrapper}>
          {item.removed ?? "Удален"}
          <button
            className={classNames(styles.item_btn, styles.btn_change)}
            onClick={() => {}}
          >
            Добавить в корзину
          </button>

        </div>

      
    </div>)
}

export default observer(CatalogItem);
