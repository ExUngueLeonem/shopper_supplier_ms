import { observer } from 'mobx-react-lite';
import { ICatalogItem } from '../../types';
import NomenclatureItem from './NomenclatureItem';

import styles from './Nomenclature.module.scss';

type Props = {
  items: ICatalogItem[]
}

function NomenclatureList({ items }: Props) {
  return (
    <div className={styles.item_list}>
      {items?.map(item => (
        <NomenclatureItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default observer(NomenclatureList);