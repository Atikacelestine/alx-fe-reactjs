import React, { useState } from 'react';

const RegistrationForm = () => {
 const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required');
     
      if (!email) {
      setError('All fields are required');
       
        if (!password) {
      setError('All fields are required');
    } else {
      setError('');
      alert(`Registration Successful: ${username}, ${email}`);
    }
  };


  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 });

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
