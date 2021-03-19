import React, {Component} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import classes from './RegistrationPage.module.css';
import Button from 'react-bootstrap/Button';

class RegistrationPage extends Component{

    //The state of my class component which consists of the inputs for the page's form
    state = {
        firstName:{
            value:"",
            label:"First Name",
            type:"text",
            controlId:"formBasicFirstName"
        },
        lastName:{
            value:"",
            label:"Last Name",
            type:"text",
            controlId:"formBasicLastName"
        },
        email:{
            value:"",
            label:"Email",
            type:"email",
            controlId:"formBasicEmail"
        },
        password:{
            value:"",
            label:"Password",
            type:"password",
            controlId:"formBasicPassword"
        },
        phoneNum:{
            value:"",
            label:"Phone Number",
            type:"text",
            controlId:"formBasicPhoneNum"
        }
    }

    //Function to handle the change in the input "Form Control" value
    handleChange = (controlId,event)=>{
        switch(controlId)
        {
            case "formBasicFirstName":
                this.setState({firstName:{...this.state.firstName,value:event.target.value}});
                console.log(this.state.firstName.value);
                break;
            case "formBasicLastName":
                this.setState({lastName:{...this.state.lastName,value:event.target.value}});
                break;
            case "formBasicEmail":
                this.setState({email:{...this.state.email,value:event.target.value}});
                break;
            case "formBasicPassword":
                this.setState({password:{...this.state.password,value:event.target.value}});
                break;
            default:
                this.setState({phoneNum:{...this.state.phoneNum,value:event.target.value}});
                break;
        }
    }


    render(){
        
        return(
            // Used Bootstraps container for it's easy positioning and styling 
            <Container fluid={+true} className={classes.EverythingContainer}>

                {/*_______The header that will be viewed in all pages_________*/}
                <Row>
                    <Header hideMenu = {false}/>
                </Row>

                {/*________This is the Row where the registration page content exists________*/}
                <Row className={classes.RegistrationContainer}>
                    <Col>
                        {/* ___The login part___ */}
                        <div className={classes.LoginBox}>
                             Already have an account?
                             <Button 
                             className={classes.LoginButton} 
                             size="lg"> Login </Button>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Row className={classes.RegistrationBox}> 

                            {/*___First Column of form___*/}
                            <Col>
                                {/*First name input*/}
                                <Form.Group 
                                controlId={this.state.firstName.controlId} 
                                className={classes.Titles}>
                                    <Form.Label> {this.state.firstName.label} </Form.Label>
                                    <Form.Control 
                                    type={this.state.firstName.type} 
                                    onChange={(event)=>this.handleChange(this.state.firstName.controlId,event)}
                                    className={classes.inputs}/>
                                </Form.Group>

                                    {/* Last name input */}
                                    <Form.Group 
                                    controlId={this.state.lastName.controlId} 
                                    className={classes.Titles}>
                                        <Form.Label> {this.state.lastName.label} </Form.Label>
                                        <Form.Control 
                                        type={this.state.lastName.type} 
                                        onChange={(event)=>this.handleChange(this.state.lastName.controlId,event)}
                                        className={classes.inputs}/>
                                    </Form.Group>

                                    {/*Email input*/}
                                    <Form.Group 
                                    controlId={this.state.email.controlId} 
                                    className={classes.Titles}>
                                        <Form.Label> {this.state.email.label} </Form.Label>
                                        <Form.Control 
                                        type={this.state.email.type} 
                                        onChange={(event)=>this.handleChange(this.state.email.controlId,event)}
                                        className={classes.inputs}/>
                                    </Form.Group>
                                </Col>

                                {/* The second column of the form */}
                                <Col>
                                    {/*Password form input*/}
                                    <Form.Group 
                                        controlId={this.state.password.controlId} 
                                        className={classes.Titles}>
                                            <Form.Label> {this.state.password.label} </Form.Label>
                                            <Form.Control 
                                            type={this.state.password.type} 
                                            onChange={(event)=>this.handleChange(this.state.password.controlId,event)}
                                            className={classes.inputs}/>
                                        </Form.Group>

                                        {/*Phone Number form input*/}
                                        <Form.Group 
                                        controlId={this.state.phoneNum.controlId} 
                                        className={classes.Titles}>
                                            <Form.Label> {this.state.phoneNum.label} </Form.Label>
                                            <Form.Control 
                                            type={this.state.phoneNum.type} 
                                            onChange={(event)=>this.handleChange(this.state.phoneNum.controlId,event)}
                                            className={classes.inputs}/>
                                        </Form.Group>

                                        {/* Registration Button */}
                                        <Button 
                                        className={classes.SubmitButton}  
                                        // onClick 
                                        size="lg">  Submit  </Button>
                                </Col>   
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>

                {/*_______The Footer that will also appear in all pages______*/}
                <Row>
                    <Footer></Footer>
                </Row>

            </Container> );
    }
}
export default RegistrationPage;


