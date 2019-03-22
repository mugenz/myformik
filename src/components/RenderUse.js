import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const StyledInput = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.color2};
`;

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
        <StyledInput>
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
        </StyledInput>
      )}
    />
  </div>
);


export default RenderUse;
