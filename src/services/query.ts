import {
  apiGetCars,
  apiGetCarsById,
  apiGetOrders,
  apiGetOrdersById,
} from "./api";
import { useQuery } from "@tanstack/react-query";

export const useGetCars = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: apiGetCars,
  });
};

export const useGetCarsById = (id: string) => {
  return useQuery({
    queryKey: ["cars", id],
    queryFn: () => apiGetCarsById(id),
  });
};

export const useGetOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => apiGetOrders,
  });
};

export const useGetOrdersById = (id: string) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => apiGetOrdersById(id),
  });
};
