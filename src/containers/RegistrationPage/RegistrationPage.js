import React, {Component} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import classes from './RegistrationPage.module.css';
import Button from 'react-bootstrap/Button';
// import Axios from 'axios';

class RegistrationPage extends Component{

    state = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        profilePic:""
    }
    render(){
        return(
            <Container fluid={+true} className={classes.EverythingContainer}>
                <Row>
                    <Header hideMenu = {false}/>
                </Row>
                <Row className={classes.RegistrationContainer}>
                    <Col >
                        <div className={classes.LoginBox}>
                            Already have an account?
                             {/* Login Button */}
                             <Button className={classes.LoginButton} size="lg">
                                Login
                             </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.RegistrationBox}>
                            <Row>
                                <Col >
                                    <Form.Group controlId="formBasicFirstName" className={classes.Titles}>
                                        <Form.Label>First Name </Form.Label>
                                        <Form.Control type="text" className={classes.inputs}/>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="formBasicLastName" className={classes.Titles}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" className={classes.inputs}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail" className={classes.Titles}>
                                        <Form.Label> Email </Form.Label>
                                        <Form.Control type="email" className={classes.inputs}/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    {/* Password Input */}
                                    <Form.Group controlId="formBasicPassword" className={classes.Titles}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" className={classes.inputs}/>
                                    </Form.Group>

                                    {/* Profile picture */}
                                    <Form>
                                        <Form.Group>
                                            <Form.File  label="Profile Picture" className={classes.ProfileAvatar}/>
                                        </Form.Group>
                                    </Form>

                                    {/* Registration Button */}
                                    <Button className={classes.SubmitButton}  onClick size="lg">
                                        Submit
                                    </Button>
                                </Col>   
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Footer></Footer>
                </Row>

            </Container> );
    }
}
export default RegistrationPage;


