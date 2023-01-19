import { Field, Form as FormikForm, Formik } from 'formik'
import React from 'react'
import CustomTextField from '../formComponents/CustomTextField';
import classNames from 'classnames';

import * as Yup from 'yup';

import styles from '../forms.module.scss';
import { authStore } from '../../../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import FormWrapper from '../formComponents/FormWrapper';

interface Values {
    name: string;
    type: "product";
    description: string;
    measure: "шт";
    price: number;
}

export default function ProductFrom({ onSubmit }: { onSubmit: (arg?: any) => void }) {

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    // login: '+79885515860',
                    // password: 'Flagman_123',
                    // isPersistent: true,
                    name: "",
                    type: "product",
                    description: "",
                    measure: "шт",
                    price: 0,
                }}

                // validationSchema={Yup.object().shape({
                //     login: Yup.string().trim().required("Обязательно к заполнению"),
                //     password: Yup.string().trim().required("Обязательно к заполнению"),
                // })}

                onSubmit={
                    (values: Values) => {
                        onSubmit(values)
                    }
                }
            >
                {
                    (props) => {
                        const {
                            values
                        } = props

                        console.log("form data values", values)
                        return (
                            <>
                                <FormikForm>
                                    <CustomTextField formikProps={{ ...props }} name={'name'} label={'Название продукта'} />
                                    <CustomTextField formikProps={{ ...props }} name={'description'} label={'Описание продукта'} />
                                    <CustomTextField formikProps={{ ...props }} name={'price'} label={'Цена продукта'} type={"number"} />

                                    <button type="submit" className={classNames(styles.submit_btn, styles.form_btn)}>
                                        Сохранить
                                    </button>
                                </FormikForm>
                            </>
                        )
                    }
                }
            </Formik>
        </FormWrapper>
    )
}
