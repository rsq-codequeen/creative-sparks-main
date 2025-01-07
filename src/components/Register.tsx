import React, { useState } from 'react';
import { Stack, TextInput, PasswordInput, Button, SimpleGrid, Title } from '@mantine/core';
import { AnimateIn } from './AnimateIn';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {
      username: formData.username ? '' : 'Username is required',
      email: formData.email && /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid email is required',
      password: formData.password ? '' : 'Password is required',
    };
    setErrors(newErrors);

    // If no errors, proceed with registration (store data in localStorage)
    if (!newErrors.username && !newErrors.email && !newErrors.password) {
      const userData = {
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem('user', JSON.stringify(userData));  // Store in localStorage
      console.log('User registered:', userData);
    }
  };

  return (
    <AnimateIn>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Title order={1}>Register</Title>
          <Title order={2}>Account Information</Title>

          {/* Username Field */}
          <TextInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            error={errors.username}
            required
          />

          {/* Email Field */}
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            error={errors.email}
            required
          />

          {/* Password Field */}
          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            error={errors.password}
            required
          />

          <Title order={2}>Additional Information</Title>
          
          {/* Simple Grid for Multiple Fields */}
          <SimpleGrid cols={2} spacing="md">
            <TextInput label="Phone Number" placeholder="Enter Phone Number" />
            <TextInput label="Address" placeholder="Enter Address" />
          </SimpleGrid>

          <Button type="submit" fullWidth style={{ marginTop: '20px' }}>
            Register
          </Button>

          <div style={{display:'flex', justifyContent:'center'}}>
            <Title order={6}>
              Already have an account?{' '}
              <Link to="/Login">
                <Button>Login</Button>
              </Link>
            </Title>
          </div>
        </Stack>
      </form>
    </AnimateIn>
  );
};
