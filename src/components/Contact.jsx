import React from 'react';
import SectionHeader from './common/SectionHeader';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
      <SectionHeader titleTxt={"Send us a message"} />
      <div className='contact content container'>
        <div className='contact-left w-50'>
          <div className='contact-text-wrap'>
            <h3 className='title'>Get in touch with us</h3>
            <p className='text'>
              At National Legal Counsel, we are committed to providing expert legal solutions to meet your needs.
              You can also fill out the contact form on our website, and our dedicated team will get back to you as soon as possible.
            </p>
          </div>
          <div className='map-wrap'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6026570090694!2d85.31999047453517!3d27.692477326148815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b1ce7d8c61%3A0x58bb28c5ee006d86!2sMaitighar%2C%20Kathmandu%2044600%2C%20Nepal!5e1!3m2!1sen!2sin!4v1736584281691!5m2!1sen!2sin"
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
                Disclaimer: The information collected by this form shall be used for client communication and identification purposes only.
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
