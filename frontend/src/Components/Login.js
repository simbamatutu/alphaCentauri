import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
export const Login = ({ location, history }) => {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch login
    dispatch(login(loginName, password));
  };

  return (
    <Row className='justify-content-md-center'>
      <Col xs={12} md={6} xl={3}>
        <h2>Sign In</h2>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='loginName'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Username'
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Passwod'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Log in
          </Button>
        </Form>
        <Row className='py-3'>
          <Link
            to={
              redirect
                ? `/password-recovery?redirect=${redirect}`
                : '/password-recovery'
            }
          >
            <Col>Forgot Password? </Col>
          </Link>
        </Row>
      </Col>
    </Row>
  );
};
export default Login;