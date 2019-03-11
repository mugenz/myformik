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
      //type="radio"
      //value='rad1'
      name='radioGroup'
      id='rad1'
      //checked={name === values.rad1}
    />
    <Field
        component={RadioButton}
      //type="radio"
      //value='rad2'
      name='radioGroup'
      id='rad2'
      //checked={name === values.rad2}
    />
    </fieldset>
    <h1>{touched2.name3}</h1>
    <h1>{values.name3}</h1>
    <button type="submit">Submit</button>
  </Form>

)}

const RadioButton = ({
    field: { name, value, onChange, onBlur },
    form: {values},
    id,
    label,
    className,
    ...props
  }) => {
      console.log(values.radioGroup)
      console.log(value)
    return (
      <div>
        <input
        className='hidIt'
          name={name}
          id={id}
          type="radio"
          value={id} // could be something else for output?
          checked={id === values.radioGroup}
          onChange={onChange}
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
