import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { bookingsAPI, servicesAPI } from '../services/api';
import toast from 'react-hot-toast';

const BookingContext = createContext();

const initialState = {
  bookings: [],
  services: [],
  categories: [],
  popularServices: [],
  selectedService: null,
  availableSlots: [],
  isLoading: false,
  error: null,
  stats: {
    total: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
    todayRevenue: 0,
  },
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'SET_SERVICES':
      return {
        ...state,
        services: action.payload,
        isLoading: false,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_POPULAR_SERVICES':
      return {
        ...state,
        popularServices: action.payload,
      };
    case 'SET_SELECTED_SERVICE':
      return {
        ...state,
        selectedService: action.payload,
      };
    case 'SET_AVAILABLE_SLOTS':
      return {
        ...state,
        availableSlots: action.payload,
      };
    case 'SET_BOOKINGS':
      return {
        ...state,
        bookings: action.payload,
        isLoading: false,
      };
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [action.payload, ...state.bookings],
        stats: {
          ...state.stats,
          total: state.stats.total + 1,
          pending: state.stats.pending + 1,
        },
      };
    case 'UPDATE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map(booking =>
          booking._id === action.payload._id ? action.payload : booking
        ),
      };
    case 'SET_STATS':
      return {
        ...state,
        stats: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Load services and categories on mount
  useEffect(() => {
    loadServices();
    loadCategories();
    loadPopularServices();
  }, []);

  const loadServices = async (params = {}) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await servicesAPI.getAll(params);
      dispatch({ type: 'SET_SERVICES', payload: response.data });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to load services';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      toast.error(errorMessage);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await servicesAPI.getCategories();
      dispatch({ type: 'SET_CATEGORIES', payload: response.data });
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const loadPopularServices = async () => {
    try {
      const response = await servicesAPI.getPopular();
      dispatch({ type: 'SET_POPULAR_SERVICES', payload: response.data });
    } catch (error) {
      console.error('Failed to load popular services:', error);
    }
  };

  const getServiceById = async (id) => {
    try {
      const response = await servicesAPI.getById(id);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to load service';
      toast.error(errorMessage);
      throw error;
    }
  };

  const getServicesByCategory = async (category) => {
    try {
      const response = await servicesAPI.getByCategory(category);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to load services';
      toast.error(errorMessage);
      throw error;
    }
  };

  const searchServices = async (query) => {
    try {
      const response = await servicesAPI.search(query);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Search failed';
      toast.error(errorMessage);
      throw error;
    }
  };

  const loadBookings = async (params = {}) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await bookingsAPI.getAll(params);
      dispatch({ type: 'SET_BOOKINGS', payload: response.data.bookings });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to load bookings';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      toast.error(errorMessage);
    }
  };

  const getBookingById = async (id) => {
    try {
      const response = await bookingsAPI.getById(id);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to load booking';
      toast.error(errorMessage);
      throw error;
    }
  };

  const createBooking = async (bookingData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await bookingsAPI.create(bookingData);
      const newBooking = response.data.booking;
      
      dispatch({ type: 'ADD_BOOKING', payload: newBooking });
      toast.success('Booking created successfully!');
      
      return { success: true, booking: newBooking };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to create booking';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      const response = await bookingsAPI.updateStatus(id, status);
      const updatedBooking = response.data.booking;
      
      dispatch({ type: 'UPDATE_BOOKING', payload: updatedBooking });
      toast.success(`Booking ${status} successfully!`);
      
      return { success: true, booking: updatedBooking };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to update booking';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const cancelBooking = async (id) => {
    try {
      const response = await bookingsAPI.cancel(id);
      const cancelledBooking = response.data.booking;
      
      dispatch({ type: 'UPDATE_BOOKING', payload: cancelledBooking });
      toast.success('Booking cancelled successfully!');
      
      return { success: true, booking: cancelledBooking };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to cancel booking';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const getAvailableSlots = async (date, serviceId) => {
    try {
      const response = await bookingsAPI.getAvailableSlots(date, serviceId);
      dispatch({ type: 'SET_AVAILABLE_SLOTS', payload: response.data.availableSlots });
      return response.data.availableSlots;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to load available slots';
      toast.error(errorMessage);
      throw error;
    }
  };

  const setSelectedService = (service) => {
    dispatch({ type: 'SET_SELECTED_SERVICE', payload: service });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    loadServices,
    loadCategories,
    loadPopularServices,
    getServiceById,
    getServicesByCategory,
    searchServices,
    loadBookings,
    getBookingById,
    createBooking,
    updateBookingStatus,
    cancelBooking,
    getAvailableSlots,
    setSelectedService,
    clearError,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
