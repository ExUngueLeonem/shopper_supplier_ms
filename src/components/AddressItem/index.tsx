import { observer } from 'mobx-react-lite';
import React from 'react';
import { AddressItemType } from '../../types';

function AddressItem({item} : {item: AddressItemType}) {

    const {
        id,
        city,
        street,
        house,
        index,
        building,
        flat,
        entrance,
        floor,
        doorPhone,
    } = item

    return (
        <div>
            <div>
                city {city}
            </div>
            <div>
                street {street}
            </div>
            <div>
                house {house}
            </div>
            <div>
                index {index}
            </div>
            <div>
                building {building}
            </div>
            <div>
                flat {flat}
            </div>
            <div>
                entrance {entrance}
            </div>
            <div>
                floor {floor}
            </div>
            <div>
                doorPhone {doorPhone}
            </div>
        </div>
    );
};

export default observer(AddressItem);