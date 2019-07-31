import React, { Component } from "react";
import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #519e8a;
`;

const FormContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 20px 40px;
border-radius: 20px;
box-shadow: 0px 10px 50px #555;
background-color:#FFFAFA;
`;

const Form  = styled.form`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

const Headline   = styled.h1`
text-align: center;
width: 100%;
color: #111;
font-weight: lighter;
`;

const Label  = styled.label`
font-size: 0.8em;
margin-bottom: 0.25em;
color: #222;
font-weight: lighter;
`;

const Input  = styled.input`
padding: 10px 10px;
border-radius: 5px;
outline: none;
border: 1px solid #519e8a;

::placeholder {
    font-size: 1.2em;
    font-weight: lighter;
    color: #999
  }
`;

const Firstname  = styled.div`
margin-right: 1%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 49%;
`;

const Lastname  = styled.div`
margin-left: 1%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 49%;
`;

const Birthdate  = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 100%;
`;

const Email  = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 100%;
`;

const Password = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
width: 100%;
`;

const ButtonWrap  = styled.div`
width: 100%; 
display: flex;
flex-direction: column;
align-items: center;
`;

const RegisterButton  = styled.button`
background-color: #519e8a;
color: #fff;
border: 2px solid #fff;
width: 100%;
margin-top: 1em;
padding: 8px 0px;
font-size: 1em;
font-weight: lighter;
letter-spacing: 1px;
margin-bottom: 0.25em;
border-radius: 5px;

:hover {
    color: #519e8a;
    background-color: #fff;
    border: 2px solid #519e8a;
  }
`;


class Register extends Component {
constructor(props) {
    super(props);

    this.state = {
        firstName: null,
        lastName: null,
        birthDate: new Date(),
        email: null,
        password: null,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
}


handleSubmit = e => {
    e.preventDefault();
    console.log(`
    Firstname: ${this.state.firstName}
    Lastname: ${this.state.lastName}
    Birth: ${this.state.birthDate}
    Email: ${this.state.email}
    Password ${this.state.password}
    `)
};

handleDateChange(date) {
    this.setState({
        birthDate: date
    });
}

handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({[name]: value})
};


render() {
    return (
<Container>
<FormContainer>
<Headline>Register</Headline>
<Form onSubmit={this.handleSubmit}>
    <Firstname> 
<Label>Firstname</Label>
<Input type="text" placeholder="Firstname" name="firstName" onChange={this.handleChange}/>
</Firstname>
<Lastname> 
<Label>Lastname</Label>
<Input type="text" placeholder="Lastname" name="lastName" onChange={this.handleChange}/>
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
        placeholderText="I have been cleared!"
      />
</Birthdate>
<Email> 
<Label>Email</Label>
<Input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
</Email>
<Password> 
<Label>Password</Label>
<Input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
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