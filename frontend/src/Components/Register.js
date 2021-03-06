import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import Formcontainer from '../Components/Formcontainer';
export const Register = ({ location, history }) => {
  const [loginName, setLoginName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [teacherNumber, setTeacherNumber] = useState('');
  const [name, setName] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');
  const [message, setMessage] = useState(null);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch Register

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(
        register(
          email,
          name,
          loginName,
          password,
          isStudent,
          isTeacher,
          studentNumber,
          teacherNumber
        )
      );
    }
  };

  return (
    <Formcontainer>
      <h2>Sign Up</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='loginName'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Username'
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='checkboxControls'>
          <Form.Check
            inline
            label='Student'
            type='switch'
            id='studentCheckbox'
            onChange={(e) => setIsStudent(e.target.checked)}
          />

          <Form.Check
            inline
            label='Teacher'
            type='switch'
            id='teacherCheckbox'
            value={isStudent}
            onChange={(e) => setIsTeacher(e.target.checked)}
          />
        </Form.Group>

        {isTeacher ? (
          <Form.Group controlId='teacherNumber'>
            <Form.Label>Teacher Number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Teacher Number'
              value={teacherNumber}
              onChange={(e) => setTeacherNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
        ) : (
          <Form.Group controlId='studentNumber'>
            <Form.Label>Student Number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Student Number'
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
        )}

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confrimPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfrimPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          <Col>Have an Account?</Col>
        </Link>
      </Row>
    </Formcontainer>
  );
};
export default Register;
