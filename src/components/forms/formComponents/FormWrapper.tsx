import React, { ReactNode } from 'react'
import classNames from 'classnames';

import styles from './FormWrapper.module.scss';

import formStyles from '../forms.module.scss';
import { popupStore } from '../../../store/PopupStore';

export default function FormWrapper({ children }: { children: ReactNode }) {
    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form_container}>
                {children}
                <button className={classNames(formStyles.form_btn)} onClick={() => popupStore.closeForm()}>
                    Отмена
                </button>
            </div>
        </div>

    )
}
