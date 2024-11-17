import React from "react"
const UserProfile = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleUpdateName = () => {
    const newName = prompt("Enter a new name:");
    if (newName) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: newName,
      }));
    }
  };
const UserProfile = (props) =>{
    return(
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
<h2>{props.name}</h2>
<p>Age : {props.age}</p>
        <p>Bio : {props.bio}</p>
             <UserProfile userContext={userContext} />;
        </div>
    );
};
export default UserProfile;
