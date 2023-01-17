import { Field, Form as FormikForm, Formik } from 'formik'
import React from 'react'
import CustomTextField from '../formComponents/CustomTextField';

import * as Yup from 'yup';

import styles from '../forms.module.scss';
import { authStore } from '../../../store/AuthStore';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {

  const navigate = useNavigate();

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>

        <Formik
          initialValues={{
            login: '+79885515860',
            password: 'Flagman_123',
          }}

          validationSchema={Yup.object().shape({
            login: Yup.string().trim().required("Обязательно к заполнению"),
            password: Yup.string().trim().required("Обязательно к заполнению"),
          })}

          onSubmit={
            (values) => {
              authStore.login(values).then((res) => { if (res?.status === 200) navigate("/user") })
            }
          }
        >
          {
            (props) => 
            <>
              <FormikForm>
                <CustomTextField formikProps={{ ...props }} name={'login'} label={'Логин'} />
                <CustomTextField formikProps={{ ...props }} name={'password'} label={'Пароль'} type={"password"} />

                <button type="submit" className={styles.submit_btn}>
                  Войти
                </button>
              </FormikForm>
            </>
          }
        </Formik>
      </div>
    </div>
  )
}
