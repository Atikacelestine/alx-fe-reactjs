import React, {createContext,useState}from 'react';

//Create a context 
const UserContext =
createContext();

//Create a provider component 
export const UserProvider =
({children})=> {
    //Define any user related state you wnat to share 
    const [userData,setUserData]=
    useState ({
        name:"Jane Doe",
        age: 30,
        email:janedoe@gmail.com;
    });

    return (
        <UserContext.provider 
        value ={{ userData,setUserData}}>
        {children}
        </UserContext.provider>
    );
};

export default UserContext;
