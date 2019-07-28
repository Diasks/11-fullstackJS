import React, { Component } from "react";

class Register extends Component {
render() {
    return (
<div>
<div>
<h1>Register</h1>
<form>
<label>Firstname</label>
<input type="text" placeholder="Firstname"/>
<label>Lastname</label>
<input type="text" placeholder="Lastname"/>
<label>Date of birth</label>
<input type="number" placeholder="Birth"/>
<label>Email</label>
<input type="email" placeholder="Email"/>
<label>Password</label>
<input type="password" placeholder="password"/>
</form>
</div>
</div>

    );
}
}

export default Register;