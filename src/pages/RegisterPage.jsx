import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/auth/register', formData);
      alert('Account created! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Create Account</h1>
        <p className="text-gray-500 text-center mb-8">Join the student utility network</p>

        {error && <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit}>
          <Input 
            label="Full Name" 
            name="username"
            placeholder="John Doe" 
            value={formData.username}
            onChange={handleChange}
            required
          />
          <Input 
            label="Email Address" 
            name="email"
            placeholder="student@tuks.co.za" 
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input 
            label="Password" 
            name="password"
            placeholder="Create a strong password" 
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full mt-4 py-3">
            Register
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;