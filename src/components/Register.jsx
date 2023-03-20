import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Strings } from '~/config/Strings';
import { useFeatures } from 'flagged';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isValidPhoneNumber, AsYouType } from 'libphonenumber-js/max';

const Register = () => {
  const form = useRef();

  const formatter = new AsYouType('RO');

  const [sendingMail, setSendingMail] = useState(false);

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_API_KEY } =
    process.env;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, Strings.register.validationMessages.name.tooShort)
      .max(30, Strings.register.validationMessages.name.tooLong)
      .required(Strings.register.validationMessages.required),
    phoneNumber: Yup.string()
      .test(
        'phoneNumber',
        Strings.register.validationMessages.phoneNumber,
        (value) => {
          let phone = value;

          if (phone[0] !== '+')
            if (phone.substring(0, 2) === '00')
              phone = phone.replace(/^.{2}/g, '+');
            else phone = '+4' + phone;
          console.log(phone);
          return isValidPhoneNumber(phone);
        }
      )
      .required(Strings.register.validationMessages.required),
    email: Yup.string()
      .email(Strings.register.validationMessages.email)
      .required(Strings.register.validationMessages.required),
    message: Yup.string()
      .min(3, Strings.register.validationMessages.message.tooShort)
      .max(500, Strings.register.validationMessages.message.tooLong)
      .nullable(),
    checkbox: Yup.string()
      .matches('true', Strings.register.validationMessages.checkbox)
      .required(Strings.register.validationMessages.required),
  });

  const { darkTheme, classicHeader, testimonialsSection, registerSection } =
    useFeatures();

  const backgroundColorPicker = () => {
    if (testimonialsSection !== registerSection) {
      if (!testimonialsSection) {
        return darkTheme ? 'bg-dark-1' : '';
      }
    }
    return darkTheme ? 'bg-dark-2' : 'bg-light';
  };

  const sendEmail = (resetForm) => {
    setSendingMail(true);
    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_API_KEY
      )
      .then(
        (result) => {
          document.getElementById('contact-form').reset();
          toast.success(Strings.register.toast.success, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? 'dark' : 'light',
          });
          console.log(result.text);
          resetForm({ values: '' });
          setSendingMail(false);
        },
        (error) => {
          toast.error(Strings.register.toast.failure, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? 'dark' : 'light',
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      checkbox: false,
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      sendEmail(resetForm);
    },
  });

  return (
    <section id="register" className={'section ' + backgroundColorPicker()}>
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            {Strings.register.backgroundTitle}
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {' '}
            {Strings.register.mainTitle}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* Register form*/}
          <div className="col-md-8 col-xl-9 mx-auto">
            <h2
              className={
                'mb-3 text-5 text-uppercase text-center text-md-start ' +
                (darkTheme ? 'text-white' : '')
              }
            >
              {Strings.register.formTitle}
            </h2>
            <form
              className={darkTheme ? 'form-dark' : ''}
              id="contact-form"
              ref={form}
              onSubmit={formik.handleSubmit}
            >
              <div className="row g-4">
                <div className="row-xl-6">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-control border- ${
                      formik.touched.name && formik.errors.name
                        ? 'border-danger'
                        : ''
                    }`}
                    placeholder={Strings.register.placeholders.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="text-danger">{formik.errors.name}</span>
                  )}
                </div>
                <div className="col-xl-6">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? 'border-danger'
                        : ''
                    }`}
                    placeholder={Strings.register.placeholders.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-danger">{formik.errors.email}</span>
                  )}
                </div>
                <div className="col-xl-6">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    className={`form-control ${
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? 'border-danger'
                        : ''
                    }`}
                    placeholder={Strings.register.placeholders.phoneNumber}
                    onChange={(e) => {
                      e.target.value = formatter.input(e.target.value);
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <span className="text-danger">
                      {formik.errors.phoneNumber}
                    </span>
                  )}
                </div>
                <div className="col">
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control ${
                      formik.touched.message && formik.errors.message
                        ? 'border-danger'
                        : ''
                    }`}
                    rows={5}
                    placeholder={Strings.register.placeholders.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <span className="text-danger">{formik.errors.message}</span>
                  )}
                </div>
              </div>
              <div className="form-check mt-3">
                <input
                  name="checkbox"
                  className={`form-check-input ${
                    formik.touched.message && formik.errors.message
                      ? 'border-danger'
                      : ''
                  }`}
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.checkbox}
                  id="gdpr-checkbox"
                />
                <label class="form-check-label" for="gdpr-checkbox">
                  <p className="mb-3 mb-lg-0">
                    Sunt de acord cu politica{' '}
                    <a
                      className="fw-500"
                      data-bs-toggle="modal"
                      data-bs-target="#gdpr-policy"
                      href="#gdpr-policy"
                    >
                      GDPR
                    </a>
                  </p>
                  {formik.touched.checkbox && formik.errors.checkbox && (
                    <span className="text-danger">
                      {formik.errors.checkbox}
                    </span>
                  )}
                </label>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
