import React from 'react';

import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Teachercoursecard({ course }) {
  const id = '60bfb4148080a259fc3ee72e';
  return (
    <Card
      className='my-3 p-1 rounded'
      style={{
        boxShadow: '0 5px 7px -5px black',
      }}
    >
      <Row className='m-2'>
        <Col>
          <Card.Img variant='top' src={course.courseImage} />
        </Col>
        <Col>
          <Row>
            <Card.Title className='ml-auto'>
              <strong>{course.courseName}</strong>
            </Card.Title>
          </Row>
          {/* <Row>
            {course.category.map((course) => (
              <Card.Subtitle key={course._id}>{course}</Card.Subtitle>
            ))}
          </Row> */}
        </Col>
      </Row>
      <Row className='m-1'>
        <Col className='m-2'>
          <Row className='justify-content-center'>45</Row>
          <Row className='justify-content-center'>Contents</Row>
        </Col>
        <Col className='m-2'>
          <Row className='justify-content-center'>{course.enrolled}</Row>
          <Row className='justify-content-center'>Attendes</Row>
        </Col>
        <Col className='m-2'>
          <Row className='justify-content-center'>35</Row>
          <Row className='justify-content-center'>Finished</Row>
        </Col>
        <Col className='m-2'>
          <Row>
            <Link to={`/admin/courses/${id}/edit`}>
              <Button className='justify-content-center'>Edit</Button>{' '}
            </Link>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default Teachercoursecard;
