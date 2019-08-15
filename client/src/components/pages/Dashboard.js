import React, { Component } from 'react';
import Axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            edit: false, 
               id: null,
            users: [],
            firstName: '',
        lastName: '',
        email: '',
          }
    }
  
//hämta alla användare från min databas
    componentDidMount() {
        var token = localStorage.getItem("jwt");
        var config = {
            headers: {'x-access-token': token}
        }
        Axios.get('http://localhost:4000/user', config
        )
        .then(res => {
            debugger;
            const users = res.data;
            console.log(res.data);
            this.setState({
                users
            })
        })
    }


//Funkar med backenden och tar bort användaren, visas direkt, yeay!
onDeleteHandle() {  
    let id = arguments[0];
    var token = localStorage.getItem("jwt");
        var config = {
            headers: {'x-access-token': token}
        }
        Axios.delete('http://localhost:4000/user/id', config, {params: {_id: id}})
        .then(response => {
            console.log(response);
            debugger;
          this.setState({
             users: this.state.users.filter(user => {
if (user._id !== id) {
    return user;
}
             })
          });  
        });
    };
  
    //TODO: add new user!
    addUser() {
        console.log('hej jag vill lägga till en ny användare!')
    }




//TODO: update user!
onUpdateHandle(event) {  
    //efter submit kör update funktionen, det är här jag vill göra min axios request till min backend!
    debugger;
    event.preventDefault();
//sätt edit till false så mitt formulär inte syns!
    this.setState({    
        edit: false });
                        
                        }


renderEditForm() {  
    //om edit ändras till true, displaya mitt icke fungerande formulär  
    if (this.state.edit) {   
    debugger;  
     return <form onSubmit={this.onUpdateHandle.bind(this)}>        
     <input type="text" name="firstName" placeholder="name" value={this.state.firstName}/>
     <input type="text" name="lastName"  placeholder="lastname" value={this.state.lastName}/>
     <input type="text" name="email"  placeholder="email" value={this.state.email}/>       
      <button>Update</button>      </form>    }  
        }
    

onEditHandle(event) { 
    //sätter edit till true så mitt formulär kan visas, sätter in användarens id
    debugger;
    this.setState({    
    edit: true,    id: arguments[0]  });
}

    render() { 
const { users } = this.state;

        return ( 
        
            <div>
                <button onClick={this.addUser.bind(this)}>Add new user</button> 
                {this.renderEditForm()}
{users.map((user, index) => (
    <li key={`${user.id}_${index}`}>
    {user.name} {user.lastname} {user.email} 
     <button onClick={this.onDeleteHandle.bind(this, user._id)}>Delete</button> 
                <button onClick={this.onEditHandle.bind(this, user._id)}>Edit</button> </li>
))}

            </div>
         );
    }
}
 
export default Dashboard;