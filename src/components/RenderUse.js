import React from 'react';
import ReactDOM from "react-dom";
import { Formik, Form, Field } from 'formik';

const RenderUse = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }
      }
      handleChange={() => {
        console.log('CHANGE')
      }
      }
      handleBlur={(values, actions) => {
        console.log('BLur')
      }
      }
      
      render={props => (
          <div>
        <Form >
          <Field
            value={props.values.name}
            name="name"
          />
          <Field component="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <button>Submit</button>
        </Form>
        </div>
      )}
    />
  </div>
);


export default RenderUse;
