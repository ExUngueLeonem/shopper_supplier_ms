import { Field, Form as FormikForm, Formik } from 'formik'
import React from 'react'
import CustomTextField from '../formComponents/CustomTextField';

import * as Yup from 'yup';

import styles from '../forms.module.scss';
import { authStore } from '../../../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import FormWrapper from '../formComponents/FormWrapper';
import classNames from 'classnames';

interface Values {
  login: string;
  password: string;
  isPersistent: boolean;
}

export default function AuthForm() {

  const navigate = useNavigate();

  return (
    <FormWrapper>

      <Formik
        initialValues={{
          login: '+79885515860',
          password: 'Flagman_123',
          isPersistent: true,
        }}

        validationSchema={Yup.object().shape({
          login: Yup.string().trim().required("Обязательно к заполнению"),
          password: Yup.string().trim().required("Обязательно к заполнению"),
        })}

        onSubmit={
          (values: Values) => {
            authStore.login(values).then((res) => { if (res?.status === 200) navigate("/user") })
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
                  <CustomTextField formikProps={{ ...props }} name={'login'} label={'Логин'} />
                  <CustomTextField formikProps={{ ...props }} name={'password'} label={'Пароль'} type={"password"} />

                  <CustomTextField formikProps={{ ...props }} name={'isPersistent'} label={'Запомнить меня'} type={"checkbox"} />

                  <button type="submit" className={ classNames(styles.submit_btn, styles.form_btn)}>
                    Войти
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
