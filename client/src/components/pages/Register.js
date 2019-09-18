/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
const axios = require('axios');

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #B0B0B0;
`;

export const FormContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 10px 30px;
border-radius: 20px;
box-shadow: 0px 10px 50px #555;
background-color:#F5F5F5;
`;

export const Form  = styled.form`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

export const Headline   = styled.h1`
text-align: center;
width: 100%;
color: #111;
font-weight: lighter;
`;

export const Label  = styled.label`
font-size: 0.8em;
margin-bottom: 0.25em;
color: #222;
font-weight: lighter;
`;

export const Input  = styled.input`
padding: 10px 10px;
border-radius: 5px;
outline: none;
border: 1px solid #F5F5F5;

::placeholder {
    font-size: 1.1em;
    font-weight: lighter;
    color: #999
  }
`;

export const Firstname  = styled.div`
margin-right: 1%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 49%;
`;

export const Lastname  = styled.div`
margin-left: 1%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 49%;
`;

export const Birthdate  = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 100%;
`;

export const Email  = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 100%;
`;

export const Password = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 100%;
`;

export const ButtonWrap  = styled.div`
width: 100%; 
display: flex;
flex-direction: column;
align-items: center;
`;

export const RegisterButton  = styled.button`
width: 100%;
margin-top: 1em;
padding: 8px 0px;
font-size: 1em;
font-weight: lighter;
letter-spacing: 1px;
margin-bottom: 0.25em;
border-radius: 5px;
color: black;
background-color: #F5F5F5;
border: 1px solid #484848;

:hover {
    background-color: #B0B0B0;
color: #fff;
border: 1px solid #fff;
  }
`;

export const Error  = styled.span`
color: red;
font-size: 0.5em;
`;

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const formValidator = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

class Register extends Component {
constructor(props) {
    super(props);

    this.state = {
        firstName: null,
        lastName: null,
        birthDate: new Date(),
        email: null,
        password: null,
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }
    };
    this.handleDateChange = this.handleDateChange.bind(this);
}


handleSubmit = e => {
    e.preventDefault();
    let errors = this.state.errors;

    if(formValidator(this.state.errors)) {
        console.info('Valid Form')
      } else {
        console.error('Invalid Form')
      }

    const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthDate: this.state.birthDate,
        email: this.state.email,
        password: this.state.password,
        telephone: null,
address: null,
zipcode: null,
city: null,
role: 'user'
    };

    axios.post(`/auth/register`, { user }).then(res => {
        if (res.data.status === "email already exist") {
          errors.email = "email already exist!";
          this.setState({ errors });
        } else {
          this.props.history.push("/login");
        }
    })
};

handleDateChange(date) {
    this.setState({
        birthDate: date
    });
}

handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
        case 'firstName': 
          errors.firstName = 
            value.length < 3
              ? 'firstname must be 3 characters long!'
              : '';
          break;
          case 'lastName': 
          errors.lastName = 
            value.length < 5
              ? 'lastname must be 5 characters long!'
              : '';
          break;
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
<Headline>Register</Headline>
<Form onSubmit={this.handleSubmit}>
    <Firstname> 
<Label>Firstname</Label>
<Input type="text" placeholder="Firstname" name="firstName" required onChange={this.handleChange}/>
{errors.firstName.length > 0 && 
    <Error>{errors.firstName}</Error>}
</Firstname>
<Lastname> 
<Label>Lastname</Label>
<Input type="text" placeholder="Lastname" name="lastName" required onChange={this.handleChange}/>
{errors.lastName.length > 0 && 
    <Error>{errors.lastName}</Error>}
</Lastname>
<Birthdate> 
<Label>Birthdate</Label>
<DatePicker
        selected={this.state.birthDate}
        onChange={this.handleDateChange}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="yyyy/MM/dd"
        isClearable={true}
        placeholderText="I have been cleared!" required
      />
</Birthdate>
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
<RegisterButton type="submit">Register</RegisterButton>
</ButtonWrap>
</Form>
</FormContainer>
</Container>
    );
}
}

export default Register;