import axios from 'axios';

const API_URL = 'http://localhost:3000';  // replace with your actual backend API URL

export const registerUser = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

// Add more API functions as needed
