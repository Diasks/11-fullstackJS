import React, { Component, Fragment } from "react";
import {Container, FormContainer, Form, Headline, Label, Input, Firstname, Lastname,
    Birthdate, Email, Password, ButtonWrap, RegisterButton} from './Register';
import Footer from '../layout/Footer';


class Profile extends Component {
    state = { showing: false };

componentDidMount() {
    this.props.getLoggedInUser();
}

handleSubmit = async (e) => {
e.preventDefault();
const updatedUser = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    birthDate: this.state.birthDate,
    email: this.state.email,
    telephone: this.state.telephone,
    address: this.state.address,
    zipcode: this.state.zipcode,
    city: this.state.city,
};
let _id = this.props.user._id;
this.props.searchUser(updatedUser, _id);
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
}


    render() { 
        const { name, lastname, email, birthdate, telephone, address, zipcode, city } = this.props.user;
        const isLoggedIn = this.props.isLoggedIn;
        const { showing } = this.state;
        const orders = this.props.orders;
    
if (isLoggedIn)  
        return ( 
            <Fragment>
<Container>
<FormContainer>
<Headline>Hello {name} {lastname}! <span role="img" aria-label="wavinghand">👋</span> </Headline>

<p>Your information:</p>
                <Form onSubmit={this.handleSubmit}> 
                <Firstname> 
<Label>Firstname</Label>
<Input type="text" name="firstName" required placeholder={name}  onChange={this.handleChange}/>
</Firstname>

<Lastname> 
<Label>Lastname</Label>
<Input type="text" name="lastName"  required placeholder={lastname} onChange={this.handleChange}/>
</Lastname>

<Birthdate> 
<Label>Birthdate</Label>
<Input type="number" name="birthDate"  required placeholder={birthdate} onChange={this.handleChange}/></Birthdate>

<Email> 
<Label>Email</Label>
<Input type="text" name="email" required placeholder={email}  onChange={this.handleChange}/>
</Email>

<Password> 
<Label>Telephone</Label>
<Input type="number" name="telephone" required placeholder={telephone}  onChange={this.handleChange}/></Password>

<Password> 
<Label>Address</Label>
<Input type="text" name="address" required placeholder={address}  onChange={this.handleChange}/></Password>

<Password> 
<Label>Zipcode</Label>
<Input type="number" name="zipcode" required placeholder={zipcode}  onChange={this.handleChange}/></Password>

<Password> 
<Label>City</Label>
<Input type="text" name="city" required placeholder={city}  onChange={this.handleChange}/></Password>

<ButtonWrap> 
<RegisterButton type="submit">Update</RegisterButton>
</ButtonWrap>
</Form>


<Fragment>
<button onClick={() => this.setState({ showing: !showing })}>Orders</button>
{ showing 
    ? <div>
{orders.map((order) => {
debugger;
return (
order.map((el) =>{
    return      <div>  <li key={el.id}>{el.name}</li></div>
}
))})}
       </div>
    : null
}
</Fragment>  

</FormContainer>
</Container>
<Footer/></Fragment>

         );

        else {
            return (<Headline>You need to be logged in to access your profile!   
                <span role="img" aria-label="smileywithsunglasses">😎</span></Headline>)
           
        }
    }
  
}
 
export default Profile;