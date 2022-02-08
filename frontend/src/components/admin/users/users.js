import axios from 'axios';
import React ,{ useEffect, useState } from 'react';
import "../users/users.css"
const Users = () => {
const[users,setUsers]=useState()

useEffect(()=>{
    const getAllUsers=()=>{
        axios.get("http://localhost:5000/users/").then((res)=>{
            console.log(res.data);
            setUsers(res.data.results)
        }).catch((err)=>{
            console.log(err);
        })
    }
    getAllUsers()},[])

    return (
        <div>
            <table>
                {}
  <tr>
      <th>Image</th>
    <th>Name</th>
    <th>Email</th>
    <th>Country</th>
  </tr>
  <tr>
      <td><img className='userImg' src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'/></td>
    <td></td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  {/* <tr>
      <td></td>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr> */}
</table>
        </div>
    );
}

export default Users;
