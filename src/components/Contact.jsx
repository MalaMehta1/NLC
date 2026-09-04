import React from 'react';
import SectionHeader from './common/SectionHeader';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { contactData } from '../data';

const Contact = () => {
  const { page, mapEmbedUrl } = contactData;

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      from_email: values.email,
      phone: values.phoneNumber,
      message: values.message,
    };

    emailjs.send(
      'service_cve6b06',        // Your Email.js Service ID
      'template_907gd6a',       // Your Email.js Template ID
      templateParams,
      'CeceF_8BY58QNSZH6'         // Replace with your Email.js Public Key
    )
    .then((result) => {
        alert('Message sent successfully!');
        resetForm();
    }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
    });
  };

  return (
    <section className='contact-section'>
      <SectionHeader titleTxt={page.sectionTitle} />
      <div className='contact content container'>
        <div className='contact-left w-50'>
          <div className='contact-text-wrap'>
            <h3 className='title'>{page.title}</h3>
            <p className='text'>{page.description}</p>
          </div>
          <div className='map-wrap'>
            <iframe 
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className='contact-right form-wrap w-50'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className='contact-form'>
              <div className='field-wrap w-40'>
                <label htmlFor="firstName" className='label'>First Name</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="input-field"
                />
                <ErrorMessage name="firstName" component="div" className="error" />
              </div>

              <div className='field-wrap w-40'>
                <label htmlFor="lastName" className='label'>Last Name</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="input-field"
                />
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>

              <div className='field-wrap w-40'>
                <label htmlFor="email" className='label'>Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className='field-wrap w-40'>
                <label htmlFor="phoneNumber" className='label'>Phone Number</label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="1234567890"
                  className="input-field"
                />
                <ErrorMessage name="phoneNumber" component="div" className="error" />
              </div>

              <div className='field-wrap w-80'>
                <label htmlFor="message" className='label'>Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="input-field"
                />
                <ErrorMessage name="message" component="div" className="error" />
              </div>

              <div className='w-100 font-12'>
                {page.disclaimer}
              </div>
              <div className='w-100'>
                <button type="submit" className='btn btn-primary' style={{paddingInline:"4rem"}}>Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
