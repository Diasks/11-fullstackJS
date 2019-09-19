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
 overflow:auto;
display: block;
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
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 35%; 
        :before { 
        position: absolute;
		top: 6px;
		left: 6px;
		width: 25%; 
		padding-right: 10px; 
        white-space: nowrap; 
    }
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
            isCreated: false,
            isUpdated: false
          }
    }
  
//hämta alla användare från min databas
    async componentDidMount() {
debugger;        

const token = localStorage.getItem("jwt");
        const config = {
            headers: {'x-access-token': token}
        } 

       
            debugger;
        const res = await axios.get('/user', config);
            const users = res.data;
            console.log(res.data);
            this.setState({
                users
            })   
        } 

//Funkar med backenden och tar bort användaren, visas direkt, yeay!
onDeleteHandle() {  
    debugger;
    let id = arguments[0];
    debugger;
    const token = localStorage.getItem("jwt");
    debugger;
        const config = {
            headers: {'x-access-token': token}
        }
        debugger;
        axios.delete(`/user/${id}`, config, {params: {_id: id}})
        .then(response => {
            console.log(response);
            debugger;
          this.setState({
             // eslint-disable-next-line array-callback-return
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
        const res = await axios.post(`/auth/register`, { user });
        debugger;
        this.setState({isCreated: true, create: false})
        return res;
   
} 


//TODO: update user!
onUpdateHandle = async (e) => {  
    e.preventDefault();
    //efter submit kör update funktionen, det är här jag vill göra min axios request till min backend!
    debugger;
 
let _id =  this.state.user._id;
    const token = localStorage.getItem("jwt");
            const config = {
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
    const result = await axios.patch(`/user/${_id}`,{ updatedUser }, config);
debugger;
console.log(result);
//sätt edit till false så mitt formulär inte syns!
this.setState({   isUpdated: true, edit: false  })
  
    } 

                        renderCreateForm() {  
                            //om edit ändras till true, displaya mitt icke fungerande formulär  
                            if (this.state.create) {   
                         
                
                             return <form onSubmit={this.onCreateHandle}>   
                             name: <input type="text" name="firstName" placeholder="name" required onChange={this.handleChange}/>
                                        lastname: <input type="text" name="lastName" placeholder="lastname" required onChange={this.handleChange}/>
                                        email: <input type="text" name="email" placeholder="email" required onChange={this.handleChange}/>
                                        birthdate: <input type="number" name="birthDate" placeholder="birthdate" required onChange={this.handleChange}/>
                                             telephone: <input type="number" name="telephone" placeholder="phonenumber" required onChange={this.handleChange}/>
                                             password: <input type="text" name="password" placeholder="password" required onChange={this.handleChange}/>
                                        address: <input type="text" name="address" placeholder="address" required onChange={this.handleChange}/>
                                        zipcode: <input type="number" name="zipcode" placeholder="zipcode" required onChange={this.handleChange}/>
                                        city: <input type="text" name="city" placeholder="city" onChange={this.handleChange}/>
                                        role: <input type="text" name="role" placeholder="role" onChange={this.handleChange}/>
                                         
                                <button type="submit">Create</button>      </form>    }  
                                }

renderEditForm() {  
    //om edit ändras till true, displaya mitt icke fungerande formulär  
    if (this.state.edit) {   
 
        let  {name, lastname, email, birthdate, telephone, address, zipcode, city, role} = this.state.user;

     return <form onSubmit={this.onUpdateHandle}>   
     name: <input type="text" name="firstname" placeholder={name} required onChange={this.handleChange}/>
                lastname: <input type="text" name="lastname" placeholder={lastname} required onChange={this.handleChange}/>
                email: <input type="text" name="email" placeholder={email} required onChange={this.handleChange}/>
                birthdate: <input type="number" name="birthdate" placeholder={birthdate} required onChange={this.handleChange}/>
                     telephone: <input type="number" name="telephone" placeholder={telephone} required onChange={this.handleChange}/>
                address: <input type="text" name="address" placeholder={address} required onChange={this.handleChange}/>
                zipcode: <input type="number" name="zipcode" placeholder={zipcode} required onChange={this.handleChange}/>
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
const { users, isCreated, isUpdated  } = this.state;
        return ( 
            <Fragment>
                <CreateButton onClick={this.onCreate.bind(this)}>Add new user</CreateButton> 
                {isCreated ? <h2>user created!</h2> : null }
                {isUpdated ? <h2>user updated!</h2> : null }
                {this.renderCreateForm()}
                {this.renderEditForm()}
<TableStyle>
	<TableHead>
	<TheadTr>
		<TableH>name</TableH>
		<TableH>lastname</TableH>
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
            </Fragment>
         );
    }
}
 
export default Dashboard;