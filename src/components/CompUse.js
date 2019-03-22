import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../App.css';

const CompUse = () => (
    <div>
        <Formik 
            component={ContactForm}
            
        />
    </div>
);

const ContactForm = ({touched, values, handleSubmit, handleChange, name}) => { 
    const touched2 = touched
    const handleChange2 = (e) => {console.log(e.target)}


     
    return (
  <Form onSubmit={handleSubmit}>
    <Field
      type="text"
      name='name3'
      value={touched2.name3}
    />
    <fieldset>
    <Field
    component={RadioButton}
      handleChange2={handleChange2}
      //type="radio"
      //value='rad1'
      name='radioGroup'
      id='rad1'
      //checked={name === values.rad1}
    />
    </fieldset>
    <h1>{touched2.name3}</h1>
    <h1>{values.name3}</h1>
    <button type="submit">Submit</button>
  </Form>

)}

const RadioButton = ({
    field: { name, value, onChange, onBlur },
    form: {values, handleChange},
    handleChange2,
    id,
    label,
    className,
    ...props
  }) => {
    return (
      <div>
        <input
          //className='hidIt'
          name={name}
          id={id}
          type="radio"
          value={id} // could be something else for output?
          //checked={id === values.radioGroup}
          onChange={(e) => { handleChange(e); handleChange2(e)  }}
          onBlur={onBlur}
          //className={classNames('radio-button')}
          {...props}
        />
        <input
          //className='hidIt'
          name={name}
          id='rad2'
          type="radio"
          value='rad2' // could be something else for output?
          //checked={id === values.radioGroup}
          onChange={(e) => { handleChange(e); handleChange2(e)  }}
          onBlur={onBlur}
          //className={classNames('radio-button')}
          {...props}
        />
        <label htmlFor={id}>
          {label}
        </label>
      </div>
    );
  };

//const handleBlur = ((a) => {console.log('Blur')})
//const handleChange = ((a) => {console.log('Change')})


export default CompUse;
