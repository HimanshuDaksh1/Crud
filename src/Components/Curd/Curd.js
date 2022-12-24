import React,{useState} from 'react'

import './Curd.css'
const Curd=()=> {
    const [users,setUsers]=useState([]);
    const [name,setName]=useState("");
    const [age, setAge]=useState("");
    const [gender,setGender]=useState("Male");


  
    
    
    const nameChange=(e)=>{
        setName(e.target.value);
    };
     const ageChange=(e)=>{
        setAge(e.target.value);
    };
     const genderChange=(e)=>{
        setGender(e.target.value);
    };
 const addUser =(e)=>{

      setUsers([...users, {name,age,gender}]);
    };
const tmpUser = [...users];
    const deleteUser =(index)=>{
      tmpUser.splice(index,1);
      setUsers(tmpUser);
     }



    


     const getUser=()=>{
  return(
 users.length> 0 &&
     users.map((user,index)=>{
return(
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
<td> 
  <button className='butt' ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
  </td>
<td> 
   <button className='button' onClick={()=>deleteUser(index)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
   </td>
</tr>
)
    })
  ),
  }



  return (
    <>
    <h1 className='tital'>This Is Curd App</h1>
    <label>Name</label>
<input className='input' type="text" onChange={nameChange} value={name}/>
<label>Age</label>
<input className='input' type="text" onChange={ageChange} value={age}/>
<label>Gender</label>
<select className='input' onChange={genderChange}>
  <option value="Male">Male</option>
  <option value="Female">Female</option></select>

<input className='btun' type="button" onClick={addUser} value="ADD"/>
<table className='table'>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Edit</th>
   <th>Delete</th>
</tr>
{getUser()}
</table>
    
    </>
  )
}
export default Curd;