import { Field, Form as FormikForm, Formik } from 'formik'
import React, { useEffect } from 'react'
import CustomTextField from '../formComponents/CustomTextField';
import classNames from 'classnames';

import * as Yup from 'yup';

import styles from '../forms.module.scss';
import { authStore } from '../../../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import FormWrapper from '../formComponents/FormWrapper';
import { ICartItem, ICatalogItem } from '../../../types';
import { popupStore } from '../../../store/PopupStore';
import { nomenclatureStore } from '../../../store/NomenclatureStore';
import { toJS } from 'mobx';

// interface Values {
//     name: string;
//     type: "product";
//     description: string;
//     measure: "шт";
//     price: number;
// }

export default function ProductFrom({ onSubmit }: { onSubmit: (arg?: any) => void }) {

    let formInitialValues = {
        name: "",
        type: "product",
        description: "",
        measure: "шт",
        price: 0,
        images: '',
        article: undefined,
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={
                    popupStore.showPopup.initialFormData
                        ?

                        toJS(popupStore.showPopup.initialFormData)
                        // {
                        //     name: "",
                        //     type: "product",
                        //     description: "",
                        //     measure: "шт",
                        //     price: 0,
                        //     images: '',
                        //     article: undefined,
                        // }
                        :

                        {
                            name: "",
                            type: "product",
                            description: "",
                            measure: "шт",
                            price: 0,
                            images: '',
                            article: undefined,
                        }
                }

                // initialValues={
                //     {
                //         name: "",
                //         type: "product",
                //         description: "",
                //         measure: "шт",
                //         price: 0,
                //         images: '',
                //         article: undefined,
                //     }}

                // validationSchema={Yup.object().shape({
                //     login: Yup.string().trim().required("Обязательно к заполнению"),
                //     password: Yup.string().trim().required("Обязательно к заполнению"),
                // })}

                onSubmit={(values) => { onSubmit(values) }}
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

                                    <CustomTextField formikProps={{ ...props }} name={'images'} label={'Ссылка на изображение'} />
                                    <CustomTextField formikProps={{ ...props }} name={'article'} label={'Артикул'} type={"number"} />

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
