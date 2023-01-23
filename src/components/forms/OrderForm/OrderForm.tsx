import { Form as FormikForm, Formik } from 'formik'
import CustomTextField from '../formComponents/CustomTextField';
import classNames from 'classnames';

import * as Yup from 'yup';

import styles from '../forms.module.scss';
import FormWrapper from '../formComponents/FormWrapper';
import { popupStore } from '../../../store/PopupStore';
import { changeTo } from '../../../script/scripts';
import { ICatalogItem, IOutcomingOrder } from '../../../types';
import { userStore } from '../../../store/UserStore';

// interface Values {
//     name: string;
//     type: "product";
//     description: string;
//     measure: "шт";
//     price: number;
// }


export default function OrderForm({ onSubmit }: { onSubmit: (arg?: any) => Promise<any> }) {

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
          {
            comment: "",
            customerId: userStore.userInfo.id,
            customerAddressId: "",
            items: []
          }
        }
        // validationSchema={Yup.object().shape({
        //     login: Yup.string().trim().required("Обязательно к заполнению"),
        //     password: Yup.string().trim().required("Обязательно к заполнению"),
        // })}

        onSubmit={(values: IOutcomingOrder) => {

          //  {
          //     "comment":"test6",
          //     "customerId":"{{customerId}}",
          //     "customerAddressId":"d920470a-9f31-4e6f-bacf-5548b969f082",
          //     "items":[
          //         { "id":"7a348c21-6f95-46a3-9453-0c6bf3150c9e", "supplierId":"d71b9861-9d05-40b0-93d9-03e7b9040ca1","amount":7 }
          //     ]
          //  }


          // onSubmit(changeTo(values, null))
          // .then(res => { if (res?.status === 200) popupStore.setShowPopup({ formType: '' }) })
        }}
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
                  <CustomTextField formikProps={{ ...props }} name={'comment'} label={'Комментарий к заказу'} />
                  <CustomTextField formikProps={{ ...props }} name={'customerAddressId'} label={'Адрес'} />

                  <button type="submit" className={classNames(styles.submit_btn, styles.form_btn)}>
                    Отправить
                  </button>
                </FormikForm>
              </>
            )
          }
        }
      </Formik>
    </FormWrapper >
  )
}
