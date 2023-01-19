import React, { ReactNode } from 'react'

import styles from './FormWrapper.module.scss';

export default function FormWrapper({ children }: { children: ReactNode }) {
    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form_container}>
                {children}
            </div>
        </div>

    )
}
