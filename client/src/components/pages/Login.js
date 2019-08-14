/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import {
    Container,
    FormContainer,
    Form,
    Headline,
    Label,
    Input,
    Email,
    Password,
    ButtonWrap,
    RegisterButton,
    Error
  } from "./Register";
  const axios = require('axios');

  const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const formValidator = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: null,
            password: null,
            errors: {
                email: '',
                password: ''
              }
        };
    }
    
    
    handleSubmit = e => {
        e.preventDefault();
    
        if(formValidator(this.state.errors)) {
            console.info('Valid Form')
          } else {
            console.error('Invalid Form')
          }
    
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
    
        axios.post(`http://localhost:4000/auth/login`, { user }).then(res => {
            debugger;
            console.log(res);
            console.log(res.data);
            localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("user", res.data.user);
          this.props.history.push("/profile");
        })
    };
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;
    
        switch (name) {
            case 'email': 
              errors.email = 
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
            case 'password': 
              errors.password = 
                value.length < 8
                  ? 'Password must be 8 characters long!'
                  : '';
              break;
            default:
              break;
          }
         
        this.setState({errors, [name]: value})
    };
    
    
    render() {
        const {errors} = this.state;
        return (
    <Container>
    <FormContainer>
    <Headline>Login</Headline>
    <Form onSubmit={this.handleSubmit}>
    <Email> 
    <Label>Email</Label>
    <Input type="email" placeholder="Email" name="email" required onChange={this.handleChange}/>
    {errors.email.length > 0 && 
        <Error>{errors.email}</Error>}
    </Email>
    <Password> 
    <Label>Password</Label>
    <Input type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
    {errors.password.length > 0 && 
        <Error>{errors.password}</Error>}
    </Password>
    <ButtonWrap> 
    <RegisterButton type="submit">Login</RegisterButton>
    </ButtonWrap>
    </Form>
    </FormContainer>
    </Container>
        );
    }
    }
    
    export default Login;