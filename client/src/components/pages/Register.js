import React, { Component } from "react";
import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
<div className="container">
<div className="formcontainer">
<h1>Register</h1>
<form onSubmit={this.handleSubmit}>
    <div className="firstName"> 
<label>Firstname</label>
<input type="text" placeholder="Firstname" name="firstName" onChange={this.handleChange}/>
</div>
<div className="lastName"> 
<label>Lastname</label>
<input type="text" placeholder="Lastname" name="lastName" onChange={this.handleChange}/>
</div>
<div className="birth"> 
<label>Birthdate</label>
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
</div>
<div className="email"> 
<label>Email</label>
<input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
</div>
<div className="password"> 
<label>Password</label>
<input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
</div>
<div className="registerButton"> 
<button type="submit">Register</button>
</div>
</form>
</div>
</div>

    );
}
}

export default Register;