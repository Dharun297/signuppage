// Import necessary modules and dependencies
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  username: string;
  password: string;
}

function App(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/Signup', formData);
      console.log(response.data); // Log the response from the server
      // You can perform actions based on the response here
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle errors here
    }
  };

  return (
    <div className="App">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
