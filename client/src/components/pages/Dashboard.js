import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TheadTr = styled.tr`
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

    display: block; 
    position: absolute;
    top: -9999px;
    left: -9999px;
    border: 1px solid #ccc;

}
`;

const RegTr = styled.tr`
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

    display: block; 
    border: 1px solid #ccc;

}
`;


const TableStyle = styled.table`
    width: 100%; 
    border-collapse: collapse; 

    @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

    display: block; 

}
`;

const TableH = styled.th`
    background: #333; 
    color: white; 
    font-weight: bold; 
    padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
 

  @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
    display: block; 
    
}
`;

const TableD = styled.td`
padding: 6px; 
border: 1px solid #ccc; 
text-align: left; 


@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
    display: block; 
    
	border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
        
        :before { 
        position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap; }

}
`;

const TableHead = styled.thead`
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

    display: block; 

}
`;


const TableBody = styled.tbody`
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

    display: block; 

}
`;


const DeleteButton = styled.button `
background-color: red;
border-radius: 5px;
`;

const EditButton = styled.button `
background-color: yellow;
border-radius: 5px;
`;

const CreateButton = styled.button `
background-color: green;
border-radius: 5px;
`;





class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            edit: false, 
            create: false,
               user: {},
            users: [],
          }
    }
  
//hämta alla användare från min databas
    componentDidMount() {

debugger;        let token = localStorage.getItem("jwt");
        let config = {
            headers: {'x-access-token': token}
        }
        axios.get('http://localhost:4000/user', config
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
    debugger;
    let id = arguments[0];
    var token = localStorage.getItem("jwt");
        var config = {
            headers: {'x-access-token': token}
        }
        axios.delete('http://localhost:4000/user/id', config, {params: {_id: id}})
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
  


 
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }




    onCreateHandle = async (e) => {
        e.preventDefault();
      
        debugger;
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            email: this.state.email,
            password: this.state.password,
            telephone: this.state.telephone,
    address: this.state.address,
    zipcode: this.state.zipcode,
    city: this.state.city,
    role: this.state.role
        };
    debugger;
        axios.post(`http://localhost:4000/auth/register`, { user }).then(res => {
            debugger;
            console.log(res);
            console.log(res.data);
    })
}


//TODO: update user!
onUpdateHandle = async (e) => {  
    e.preventDefault();

    //efter submit kör update funktionen, det är här jag vill göra min axios request till min backend!
    debugger;

let _id =  this.state.user._id;
    let token = localStorage.getItem("jwt");
            let config = {
                headers: {'x-access-token': token}
            }

    const updatedUser = {
        name: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        birthdate: this.state.birthdate,
        telephone: this.state.telephone,
        address: this.state.address,
        zipcode: this.state.zipcode,
        city: this.state.city,
        role: this.state.role
    };
debugger;
    const result = await axios.patch(`http://localhost:4000/user/${_id}`,{ updatedUser }, config);
debugger;
console.log(result);
//sätt edit till false så mitt formulär inte syns!
    this.setState({    
        user: result.data, edit: false });
                        
                        }


                        renderCreateForm() {  
                            //om edit ändras till true, displaya mitt icke fungerande formulär  
                            if (this.state.create) {   
                         
                
                             return <form onSubmit={this.onCreateHandle}>   
                             name: <input type="text" name="firstName" placeholder="name" onChange={this.handleChange}/>
                                        lastname: <input type="text" name="lastName" placeholder="lastname" onChange={this.handleChange}/>
                                        email: <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
                                        birthdate: <input type="number" name="birthDate" placeholder="birthdate" onChange={this.handleChange}/>
                                             telephone: <input type="number" name="telephone" placeholder="phonenumber" onChange={this.handleChange}/>
                                        address: <input type="text" name="address" placeholder="address" onChange={this.handleChange}/>
                                        zipcode: <input type="number" name="zipcode" placeholder="zipcode" onChange={this.handleChange}/>
                                        city: <input type="text" name="city" placeholder="city" onChange={this.handleChange}/>
                                        role: <input type="text" name="role" placeholder="role" onChange={this.handleChange}/>
                                         
                                <button type="submit">Create</button>      </form>    }  
                                }




renderEditForm() {  
    //om edit ändras till true, displaya mitt icke fungerande formulär  
    if (this.state.edit) {   
 
        let  {name, lastname, email, birthdate, telephone, address, zipcode, city, role} = this.state.user;

     return <form onSubmit={this.onUpdateHandle}>   
     name: <input type="text" name="name" placeholder={name} onChange={this.handleChange}/>
                lastname: <input type="text" name="lastname" placeholder={lastname} onChange={this.handleChange}/>
                email: <input type="text" name="email" placeholder={email} onChange={this.handleChange}/>
                birthdate: <input type="number" name="birthdate" placeholder={birthdate} onChange={this.handleChange}/>
                     telephone: <input type="number" name="telephone" placeholder={telephone} onChange={this.handleChange}/>
                address: <input type="text" name="address" placeholder={address} onChange={this.handleChange}/>
                zipcode: <input type="number" name="zipcode" placeholder={zipcode} onChange={this.handleChange}/>
                city: <input type="text" name="city" placeholder={city} onChange={this.handleChange}/>
                role: <input type="text" name="role" placeholder={role} onChange={this.handleChange}/>
                 
        <button type="submit">Update</button>      </form>    }  
        }
    

onEditHandle(e) { 

    //sätter edit till true så mitt formulär kan visas, sätter in användarens id
    debugger;
    this.setState({    
    edit: true,    user: arguments[0]  });
}


onCreate(e) { 

    //sätter edit till true så mitt formulär kan visas, sätter in användarens id
    debugger;
    this.setState({    
    create: true  });
}


    render() { 
const { users } = this.state;

        return ( 
        
            <div>
                <CreateButton onClick={this.onCreate.bind(this)}>Add new user</CreateButton> 
                {this.renderCreateForm()}
                {this.renderEditForm()}
<TableStyle>
	<TableHead>
	<TheadTr>
		<TableH>name</TableH>
		<TableH>lastname</TableH>
		<TableH>birhdate</TableH>
        <TableH>email</TableH>
		<TableH>telephone</TableH>
		<TableH>address</TableH>
        <TableH>zipcode</TableH>
		<TableH>city</TableH>
		<TableH>role</TableH>
        <TableH>Edit</TableH>
		<TableH>Delete</TableH>
	</TheadTr>
	</TableHead>
	<TableBody>

    {users.map((user, index) => (
        	  <Fragment> 
            <RegTr>
     
		<TableD>{user.name}</TableD>
		<TableD>{user.lastname}</TableD>
		<TableD>{user.birthdate}</TableD>
        <TableD>{user.email}</TableD>
		<TableD>{user.telephone}</TableD>
		<TableD>{user.address}</TableD>
        <TableD>{user.zipcode}</TableD>
		<TableD>{user.city}</TableD>
        <TableD>{user.role}</TableD>
		<TableD>  <DeleteButton onClick={this.onDeleteHandle.bind(this, user._id)}>Delete</DeleteButton> </TableD>
		<TableD><EditButton onClick={this.onEditHandle.bind(this, user)}>Edit</EditButton></TableD>
        </RegTr>
        </Fragment>
    ))}
 

	
	</TableBody>
</TableStyle>
            </div>
         );
    }
}
 
export default Dashboard;