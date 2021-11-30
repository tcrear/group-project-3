import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginUser } from '../utils/api';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [ userFormData, setUserFormData ] = useState({ email: '', password: '' });
  const [ validated, setValidated ] = useState(false);
  const [ showAlert, setShowAlert ] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
  const style={
    form:{
      margin: "auto",
      textAlign: "center",
      padding: "30px",
      width: "100vh"
    },

    textBox:{
      boxShadow: "rgb(49, 49, 49) 4px 4px 4px 4px"
    },

    submitBtn:{
      marginTop: "20px",
      boxShadow: "rgb(49, 49, 49) 4px 4px 4px 4px",
      textDecoration: 'none',
      background: "rgb(129, 133, 227)",
      color: 'rgb(215, 215, 215)',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '3px',
      boxShadow: 'rgb(49, 49, 49) 4px 4px 4px',
      fontFamily: '"Bungee", cursive',
      border: "black 2px"
    }
  }

  return (
    <>
      <Form style={style.form} noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'></Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
            style={style.textBox}
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'></Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
            style={style.textBox}
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          style={style.submitBtn}
          >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;