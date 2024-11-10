import React ,{UserContext}from 'react';
import UserContext from './UserContext';
const UserDetails=()=>{
    const {userData }= useContext(UserContext);
}
function UserDetails({ userData }) {
    return (
      <div>
        <h2>User Details</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;