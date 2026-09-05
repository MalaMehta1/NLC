import React from 'react';
import SectionHeader from './common/SectionHeader';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { IoCall, IoMailSharp, IoTimeOutline, IoLocationSharp } from 'react-icons/io5';
import { contactData } from '../data';

const Contact = () => {
  const { page, mapEmbedUrl, phone, email, emailMailto, officeHours, offices } = contactData;
  const headOffice = offices?.[0];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      from_email: values.email,
      phone: values.phoneNumber,
      message: values.message,
    };

    emailjs
      .send('service_j0czije', 'template_jxgig3d', templateParams, 'CeceF_8BY58QNSZH6')
      .then(
        () => {
          alert('Message sent successfully!');
          resetForm();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-section__inner container">
        <SectionHeader titleTxt={page.sectionTitle} subTitleTxt={page.subtitle} />

        <div className="contact">
          <div className="contact-left">
            <div className="contact-text-wrap">
              <h3 className="contact-heading">{page.title}</h3>
              <p className="contact-copy">{page.description}</p>
            </div>

            <ul className="contact-details">
              <li>
                <a href={`tel:${phone}`} className="contact-detail">
                  <span className="contact-detail__icon" aria-hidden="true">
                    <IoCall />
                  </span>
                  <span>
                    <strong>Phone</strong>
                    <em>{phone}</em>
                  </span>
                </a>
              </li>
              <li>
                <a href={emailMailto} className="contact-detail">
                  <span className="contact-detail__icon" aria-hidden="true">
                    <IoMailSharp />
                  </span>
                  <span>
                    <strong>Email</strong>
                    <em>{email}</em>
                  </span>
                </a>
              </li>
              <li>
                <div className="contact-detail">
                  <span className="contact-detail__icon" aria-hidden="true">
                    <IoTimeOutline />
                  </span>
                  <span>
                    <strong>{officeHours.title}</strong>
                    <em>
                      {officeHours.days} · {officeHours.time}
                    </em>
                  </span>
                </div>
              </li>
              {headOffice ? (
                <li>
                  <a
                    href={headOffice.mapUrl}
                    className="contact-detail"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-detail__icon" aria-hidden="true">
                      <IoLocationSharp />
                    </span>
                    <span>
                      <strong>{headOffice.label}</strong>
                      <em>{headOffice.lines.join(', ')}</em>
                    </span>
                  </a>
                </li>
              ) : null}
            </ul>

            <div className="map-wrap">
              <iframe
                src={mapEmbedUrl}
                title="National Legal Counsel office location"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-right">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="contact-form">
                <div className="contact-form__intro">
                  <h3>Send a message</h3>
                  <p>Share a few details and we will follow up shortly.</p>
                </div>

                <div className="contact-form__row">
                  <div className="field-wrap">
                    <label htmlFor="firstName" className="label">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className="input-field"
                    />
                    <ErrorMessage name="firstName" component="div" className="error" />
                  </div>

                  <div className="field-wrap">
                    <label htmlFor="lastName" className="label">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      className="input-field"
                    />
                    <ErrorMessage name="lastName" component="div" className="error" />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="field-wrap">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="input-field"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>

                  <div className="field-wrap">
                    <label htmlFor="phoneNumber" className="label">
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="98XXXXXXXX"
                      className="input-field"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="error" />
                  </div>
                </div>

                <div className="field-wrap field-wrap--full">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    className="input-field input-field--textarea"
                    rows="5"
                  />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>

                <p className="contact-form__disclaimer">{page.disclaimer}</p>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  {page.submitLabel || 'Send message'}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
