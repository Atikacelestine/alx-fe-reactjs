import React from 'react';
import { UserProvider } from './UserContext';


import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
<UserProvider>
    <div>
        <h1>
            UserProfile Application
        </h1>
        <ProfilePage/>
    </div>
</UserProvider>
  
}

export default App;