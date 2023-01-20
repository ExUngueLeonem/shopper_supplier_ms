import { observer } from 'mobx-react-lite';
import { ICatalogItem } from '../../types';
import CatalogItem from './CatalogItem';

import styles from './Catalog.module.scss';

type Props = {
  items: ICatalogItem[];
}

function CatalogList({ items }: Props) {
  return (
    <div className={styles.item_list}>
      {items?.map(item => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default observer(CatalogList);