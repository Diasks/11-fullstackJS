import React, { Component } from "react";
import {Container, FormContainer, Form, Headline, Label, Input, Firstname, Lastname,
    Birthdate, Email, Password, ButtonWrap, RegisterButton} from './Register';




class Profile extends Component {
    state = { showing: false };

componentDidMount() {
    this.props.getLoggedInUser();
}

handleSubmit = async (e) => {
e.preventDefault();
const updatedUser = {
    telephone: this.state.telephone,
    address: this.state.address,
    zipcode: this.state.zipcode,
    city: this.state.city,
};
debugger;
let _id = this.props.user._id;
this.props.searchUser(updatedUser, _id);
}

handleChange = (e) => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
}


    render() { 
        const { name, lastname, email, birthdate, telephone, address, zipcode, city } = this.props.user;
        const isLoggedIn = this.props.isLoggedIn;
        const { showing } = this.state;
        const orders = this.props.orders;
    
if (isLoggedIn)  
        return ( 
<Container>
<FormContainer>
<Headline>Hello {name} {lastname}!</Headline>
<p>Your information:</p>
                <Form onSubmit={this.handleSubmit}> 
                <Firstname> 
<Label>Firstname</Label>
<Input type="text" name="name" placeholder={name} onChange={this.handleChange}/>
</Firstname>

<Lastname> 
<Label>Lastname</Label>
<Input type="text" name="lastname" placeholder={lastname} onChange={this.handleChange}/>
</Lastname>

<Birthdate> 
<Label>Birthdate</Label>
<Input type="number" name="birthdate" placeholder={birthdate} onChange={this.handleChange}/></Birthdate>

<Email> 
<Label>Email</Label>
<Input type="text" name="email" placeholder={email} onChange={this.handleChange}/>
</Email>

<Password> 
<Label>Telephone</Label>
<Input type="number" name="telephone" placeholder={telephone} onChange={this.handleChange}/></Password>


<Password> 
<Label>Address</Label>
<Input type="text" name="address" placeholder={address} onChange={this.handleChange}/></Password>

<Password> 
<Label>Zipcode</Label>
<Input type="number" name="zipcode" placeholder={zipcode} onChange={this.handleChange}/></Password>

<Password> 
<Label>City</Label>
<Input type="text" name="city" placeholder={city} onChange={this.handleChange}/></Password>

 

<ButtonWrap> 
<RegisterButton type="submit">Update</RegisterButton>
</ButtonWrap>
</Form>


<div>
<button onClick={() => this.setState({ showing: !showing })}>dina ordrar</button>
{ showing 
    ? <div>
      
        hej
       {console.log({orders})}</div>
    : null
}
</div>  

</FormContainer>
</Container>


         );

        else {
            return (<h1>Du måste logga in för att kunna se din profil!</h1>)
        }
    }
}
 
export default Profile;