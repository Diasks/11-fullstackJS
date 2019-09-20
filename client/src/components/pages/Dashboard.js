import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import {Container, FormContainer, Headline, Label, Form, RegisterButton, ButtonWrap } from './Register';

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
const token = localStorage.getItem("jwt");
        const config = {
            headers: {'x-access-token': token}
        } 
        const res = await axios.get('/user', config);
            const users = res.data;
            this.setState({
                users
            })   
        } 

onDeleteHandle() {  
    let id = arguments[0];
    const token = localStorage.getItem("jwt");
        const config = {
            headers: {'x-access-token': token}
        }
        axios.delete(`/user/${id}`, config, {params: {_id: id}})
        .then(response => {
          this.setState({
             users: this.state.users.filter(user => {
if (user._id !== id) {
    return user;
}
             })
          });  
      return response;  });
    };
  
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onCreateHandle = async (e) => {
        e.preventDefault();
        console.log('jag är onCreateHandle o gör backend requests!');
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
  
        const res = await axios.post(`/auth/register`, { user });
        this.setState({isCreated: true, create: false})

        const token = localStorage.getItem("jwt");
        const config = {
            headers: {'x-access-token': token}
        }
        const result = await axios.get('/user', config);
        const users = result.data;
            this.setState({
                users, create: false, isCreated: true
            })
} 



onUpdateHandle = async (e) => {  
    e.preventDefault(); 
    console.log('jag är onUpdateHandle o gör backend requests!');
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

    const result = await axios.patch(`/user/${_id}`,{ updatedUser }, config);
this.setState({   isUpdated: true, edit: false  })
const res = await axios.get('/user', config);
    const users = res.data;
    this.setState({
        users, edit: false, isUpdated: true
    })

    } 

                        renderCreateForm() {  
                           
                             if (this.state.create) {   
                           
                                                             return <Container><FormContainer>
                                     <Form onSubmit={this.onCreateHandle}>   
                                                             <Headline>Create new user</Headline>
                                                            <Label>name:</Label>  <input type="text" name="firstName" required placeholder="name"  onChange={this.handleChange}/>
                                                                        <Label>lastname:</Label> <input type="text" required name="lastName" placeholder="lastname"  onChange={this.handleChange}/>
                                                                        <Label>email:</Label> <input type="text" required name="email" placeholder="email"  onChange={this.handleChange}/>
                                                                        <Label>birthdate:</Label> <input type="number" required name="birthDate" placeholder="birthdate"  onChange={this.handleChange}/>
                                                                             <Label>telephone:</Label> <input type="number" required name="telephone" placeholder="phonenumber"  onChange={this.handleChange}/>
                                                                             <Label>password:</Label> <input type="text" required name="password" placeholder="password"  onChange={this.handleChange}/>
                                                                        <Label>address:</Label> <input type="text" required name="address" placeholder="address"  onChange={this.handleChange}/>
                                                                        <Label>zipcode:</Label> <input type="number" required name="zipcode" placeholder="zipcode"  onChange={this.handleChange}/>
                                                                        <Label>city:</Label> <input type="text" required name="city" placeholder="city" onChange={this.handleChange}/>
                                                                        <Label>role:</Label> <input type="text" required name="role" placeholder="role" onChange={this.handleChange}/>
                                                                         
                                                                   <ButtonWrap> 
<RegisterButton type="submit">Create</RegisterButton>
</ButtonWrap>       </Form> </FormContainer> </Container>   }  
                                                                   
                        }

renderEditForm() {  
 
    if (this.state.edit) {   
 
                let  {name, lastname, email, birthdate, telephone, address, zipcode, city, role} = this.state.user;
        
             return <Container><FormContainer>
                <Headline>Update user</Headline>
             <Form onSubmit={this.onUpdateHandle}>   
                  
                                  <Label>name:</Label> <input type="text" name="name" required placeholder={name}  onChange={this.handleChange}/>
                        <Label>lastname:</Label> <input type="text" name="lastname" required placeholder={lastname}  onChange={this.handleChange}/>
                        <Label>email:</Label> <input type="text" name="email" required placeholder={email}  onChange={this.handleChange}/>
                        <Label>birthdate:</Label> <input type="number" name="birthdate" required placeholder={birthdate}  onChange={this.handleChange}/>
                             <Label>telephone:</Label> <input type="number" name="telephone" required placeholder={telephone} onChange={this.handleChange}/>
                        <Label>address:</Label> <input type="text" name="address" required  placeholder={address} onChange={this.handleChange}/>
                        <Label>zipcode:</Label> <input type="number" name="zipcode" required placeholder={zipcode} onChange={this.handleChange}/>
                        <Label>city:</Label> <input type="text" name="city" required placeholder={city} onChange={this.handleChange}/>
                        <Label>role:</Label> <input type="text" name="role" required placeholder={role} onChange={this.handleChange}/>
                         
                <ButtonWrap> 
<RegisterButton type="submit">Update</RegisterButton>
</ButtonWrap>      </Form>
</FormContainer> </Container>    }  

}
    

onEditHandle(e) { 
    console.log('jag är onEditHandle!');
    this.setState({    
    edit: true,    user: arguments[0]  });
}


onCreate(e) { 
    console.log('jag är onCreate!');
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
<Footer/>
            </Fragment>
         );
    }
}
 
export default Dashboard;