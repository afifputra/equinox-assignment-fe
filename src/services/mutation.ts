import { useMutation } from "@tanstack/react-query";
import {
  apiDeleteCar,
  apiDeleteOrder,
  apiPostCar,
  apiPostOrder,
  apiUpdateCar,
  apiUpdateOrder,
} from "./api";

export const usePostCar = () => {
  return useMutation({
    mutationKey: ["cars"],
    mutationFn: apiPostCar,
  });
};

export const useDeleteCar = () => {
  return useMutation({
    mutationKey: ["cars"],
    mutationFn: apiDeleteCar,
  });
};

export const useUpdateCar = (id: string) => {
  return useMutation({
    mutationKey: ["cars"],
    mutationFn: (data: any) => apiUpdateCar(id, data),
  });
};

export const usePostOrder = () => {
  return useMutation({
    mutationKey: ["orders"],
    mutationFn: apiPostOrder,
  });
};

export const useDeleteOrder = () => {
  return useMutation({
    mutationKey: ["orders"],
    mutationFn: apiDeleteOrder,
  });
};

export const useUpdateOrder = (id: string) => {
  return useMutation({
    mutationKey: ["orders"],
    mutationFn: (data: any) => apiUpdateOrder(id, data),
  });
};
