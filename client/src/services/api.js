import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/profile', data),
  changePassword: (data) => api.put('/auth/change-password', data),
  getUsers: () => api.get('/auth/users'),
  toggleUserStatus: (userId) => api.put(`/auth/users/${userId}/toggle-status`),
};

export const servicesAPI = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
  getByCategory: (category) => api.get(`/services/category/${category}`),
  getPopular: () => api.get('/services/popular'),
  getCategories: () => api.get('/services/categories'),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
  toggleAvailability: (id) => api.put(`/services/${id}/toggle-availability`),
  togglePopularity: (id) => api.put(`/services/${id}/toggle-popularity`),
  search: (query) => api.get(`/services/search?q=${query}`),
};

export const bookingsAPI = {
  getAll: () => api.get('/bookings'),
  getById: (id) => api.get(`/bookings/${id}`),
  create: (data) => api.post('/bookings', data),
  update: (id, data) => api.put(`/bookings/${id}`, data),
  cancel: (id) => api.put(`/bookings/${id}/cancel`),
  getAvailableSlots: (date, serviceId) => 
    api.get(`/bookings/available-slots?date=${date}&serviceId=${serviceId}`),
};

export const adminAPI = {
  getDashboardStats: () => api.get('/admin/dashboard'),
  getBookingStats: (filters) => api.get('/admin/bookings/stats', { params: filters }),
  getRevenueAnalytics: (period) => api.get(`/admin/revenue/${period}`),
  getServicePerformance: () => api.get('/admin/services/performance'),
  exportBookings: (format) => api.get(`/admin/bookings/export?format=${format}`),
  getSystemHealth: () => api.get('/admin/system/health'),
  getUserActivity: () => api.get('/admin/users/activity'),
};

export const healthAPI = {
  check: () => api.get('/health'),
};

export default api;
