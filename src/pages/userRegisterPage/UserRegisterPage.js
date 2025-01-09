import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../redux/actions'

const UserRegisterPage = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
           [event.target.name] : event.target.value
        })
    }

    const addUser = (event) => {
        event.preventDefault();
        dispatch(addUserAction(user))
    }

  return (
      <Container>
          {loading ? <Spinner animation="border" variant="success" /> :
            <Form onSubmit={addUser}>
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control
                            type="text"
                            placeholder="name"
                            name="name"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Control
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Button  type="submit" variant="success" className="w-100">
                        register user
                    </Button>
                </Col>
            </Row>
        </Form>
          }
    </Container> 
  )
}

export default UserRegisterPage