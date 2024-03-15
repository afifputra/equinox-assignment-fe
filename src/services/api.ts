import { API_URL } from "../constant";
import axios from "axios";

export const apiGetCars = async () => {
  try {
    const response = await axios.get(`${API_URL}cars`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetCarsById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}cars/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPostCar = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}cars`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDeleteCar = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}cars/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiUpdateCar = async (id: string, data: any) => {
  try {
    const response = await axios.put(`${API_URL}cars/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}orders`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetOrdersById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}orders/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPostOrder = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}orders`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDeleteOrder = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}orders/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiUpdateOrder = async (id: string, data: any) => {
  try {
    const response = await axios.put(`${API_URL}orders/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
