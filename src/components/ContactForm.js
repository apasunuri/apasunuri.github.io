import React, { useState } from 'react';
import { useForm as useFormRHF } from 'react-hook-form';
import axios from 'axios';
import '../App.js';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, formState: {errors}, handleSubmit } = useFormRHF();

  const onSubmit = (data) => {
    const message = {
      'Name': data.name,
      'Email': data.email,
      'Subject': data.subject,
      'Message': data.message
    }
    axios.post('https://formspree.io/f/mjvjawry', message).then(res => res);
    setSubmitted(true);
  };
  if(submitted) {
    return <h6 style={{"margin-top": 20}}>Thank you! Your message has been sent successfully! I hope to respond as soon as possible!</h6>;
  }
  return (
    <div className='ContactForm'>
      <h2 className="content-h2" style={{"margin-top": 20, "font-family": "Montserrat"}}>Contact Me!</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='row formRow'>
                  <div className='col-6' style={{"font-family": "Montserrat"}}>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      {...register("name", {
                          required: {value: "Required", message: 'Please enter your name'},
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                  </div>
                  <div className='col-6' style={{"font-family": "Montserrat"}}>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      {...register("email", {
                        required: "Required",
                        pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && <p className='text-danger'>Please enter a valid email</p>}
                  </div>
                </div>
                <div className='row formRow' style={{"margin-top": 20, "font-family": "Montserrat"}}>
                  <div className='col'>
                    <input
                      id='subject'
                      type='text'
                      name='subject'
                      {...register("subject", {
                        required: {value: "Required", message: 'Please enter a subject'},
                        maxLength: {
                          value: 80,
                          message: 'Please use 80 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && <p className='text-danger'>{errors.subject.message}</p>}
                  </div>
                </div>
                <div className='row formRow' style={{"margin-top": 20, "margin-bottom": 20, "font-family": "Montserrat"}}>
                  <div className='col'>
                    <textarea
                      id='message'
                      name='message'
                      {...register("message", {
                        required: "Required",
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <p className='text-danger'>Please enter a message</p>}
                  </div>
                </div>
                <button type="submit" className='btn btn-secondary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;