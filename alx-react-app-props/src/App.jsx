import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';
function App(){
  return(
    <ProfilePage userData={userData} />;
<UserProvider>
    <div>
        <h1>
            UserProfile Application
        </h1>
        <ProfilePage/>
    </div>
</UserProvider>
  <UserContext.Provider 
  value={{userData,setUserData}}>
{children}
</UserContext.Provider>
  );
}

export default App;
