import React, { useState } from 'react';
import { Stack, TextInput, PasswordInput, Button, Title, Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { AnimateIn } from './AnimateIn';
export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fakeLoginApi = (email: string, password: string) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === user.email && password === user.password) {
            resolve('Login successful');
          } else {
            reject('Invalid email or password');
          }
        }, 1000);
      });
    } else {
      return Promise.reject('No registered users');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const newErrors = {
      email: formData.email ? '' : 'Email is required',
      password: formData.password ? '' : 'Password is required',
    };
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      try {
        await fakeLoginApi(formData.email, formData.password);
        console.log('Login successful', formData);
        navigate('/dashboard');  // Redirect to the dashboard
      } catch (error: any) {
        setLoginError(error);
      }
    }
  };

  return (
    <AnimateIn>
    <form onSubmit={handleSubmit}>
      <Stack>
        <Title order={2}>Login</Title>

        {/* Email Field */}
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your Gmail address"
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

        {/* Show login error if any */}
        {loginError && <Alert color="red">{loginError}</Alert>}

        <Button type="submit" fullWidth style={{ marginTop: '20px' }} onClick={() => navigate('/Hero')}>
          Login
        </Button>

        {/* Registration Link */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Title order={6}>
            Don't have an account?{' '}
            <Button onClick={() => navigate('/register')}>Register</Button>
          </Title>
        </div>
      </Stack>
    </form>
    </AnimateIn>
  );
};
