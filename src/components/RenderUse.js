import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import UserContext from './context/UserContext';

const StyledInput = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.color2};
`;


const RenderUse = () => {
  const data = useContext(UserContext)
  return (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: data.kostas }}
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
              value={data.manos}
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
)

};


export default RenderUse;
