import React, { Component } from "react";

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
if (isLoggedIn)  
        return ( 
            <div>
                <h1>Hello {name} {lastname}!</h1>
                <p>Your information:</p>
                <form onSubmit={this.handleSubmit}> 
                name: <input type="text" name="name" placeholder={name} onChange={this.handleChange}/>
                lastname: <input type="text" name="lastname" placeholder={lastname} onChange={this.handleChange}/>
                email: <input type="text" name="email" placeholder={email} onChange={this.handleChange}/>
                birthdate: <input type="number" name="birthdate" placeholder={birthdate} onChange={this.handleChange}/>
                     telephone: <input type="number" name="telephone" placeholder={telephone} onChange={this.handleChange}/>
                address: <input type="text" name="address" placeholder={address} onChange={this.handleChange}/>
                zipcode: <input type="number" name="zipcode" placeholder={zipcode} onChange={this.handleChange}/>
                city: <input type="text" name="city" placeholder={city} onChange={this.handleChange}/>
                <button type="submit">Tryck här!</button>
                </form>
            
                <div>
                <button onClick={() => this.setState({ showing: !showing })}>dina ordrar</button>
                { showing 
                    ? <div>Lägg ordrar här!</div>
                    : null
                }
            </div>  
        
            </div>

         );
        else {
            return (<h1>Du måste logga in för att kunna se din profil!</h1>)
        }
    }
}
 
export default Profile;