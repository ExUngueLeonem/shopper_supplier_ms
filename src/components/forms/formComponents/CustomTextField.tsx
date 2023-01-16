import { Field } from 'formik'
import React, { FC } from 'react'

import styles from './CustomTextField.module.scss';

export default function CustomTextField({
    label = '',
    name,
    withError = false,
    formikProps,
    type = "text",
}: {
    label: string;
    name: string;
    withError?: boolean;
    formikProps?: any;
    type?: "text" | "number" | "password"
}) {

    const {
        values,
        errors,
        touched
    } = formikProps

    return (
        <div className={styles.field_wrapper}>
            <div className={styles.label_wrapper}>
                <label htmlFor={name}> {label} </label>
            </div>
            <div>
                <Field name={name} placeholder={label} type={type} className={styles.text_field}/>
            </div>
            {withError &&
                <>
                    {errors[name] && touched[name] && (
                        <div className={styles.input_feedback}>{errors[name]}</div>
                    )}
                </>
            }
        </div>
    )
}
