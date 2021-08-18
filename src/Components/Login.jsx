import React from "react";
import * as EmailValidator from "email-validator";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginLogic } from '../api/LoginLogic'
import '../style/style.css'


const Login = (props) =>
(<Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      if (values.email && values.password) {
        LoginLogic(values.email, values.password)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            // window.location.reload();

            props.history.replace('/adminpanel')

            console.log("با موفقیت وارد شدید")
            window.location.reload();
          })
          .catch(err => {
            console.log(err)

            alert("مشکلی هنگام ورود رخ داده است")
          })
      }

      setSubmitting(false);
    }, 500);
  }}
  //********Handling validation messages******/
  validate={values => {
    let errors = {};
    if (!values.email) {
      errors.email = "مجاز به خالی گذاشتن این فیلد نیستید";
    } else if (!EmailValidator.validate(values.email)) {
      errors.email = "آدرس ایمیل معتبر نیست";
    }

    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "مجاز به خالی گذاشتن این فیلد نیستید";


    } else if (values.password.length < 8) {
      errors.password = "کلمه عبور حداقل شامل 8 حرف می باشد";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "کلمه عبور شامل اعداد می باشد";
    }

    return errors;
  }}
  //********Using Yum for validation********/

  validationSchema={Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(8)
      .matches(/(?=.*[0-9])/)
  })}
>
  {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;
    return (
      <div className="login--container">
        <div className="login--center">
          <h2>ورود به پنل مدیریت</h2>
          <form onSubmit={handleSubmit} className="login--form">

            <div className="text--field" >
              <input name="email" type="text" value={values.email} onChange={handleChange}
                onBlur={handleBlur} className={errors.email && touched.email && "error"}
              />
              <span></span>
              <label htmlFor="email">نام کاربری</label>
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>

            <div className="text--field">
              <input type="password" value={values.password} onChange={handleChange}
                name="password" onBlur={handleBlur} className={errors.password && touched.password && "error"} />
              <span></span>
              <label >کلمه عبور</label>

              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>

            <button className="login--button" type="submit" disabled={isSubmitting} >ورود</button>

          </form>
        </div>
      </div>
    );
  }}
</Formik>
);

export default Login;