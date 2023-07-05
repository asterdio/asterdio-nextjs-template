import axiosInstance from '@/requests';
import { AUTH_APIS } from '@/requests/apis';

export interface AuthRequestSchemaTypes {
  mobile_number?: string;
  password?: string;
  token?: string;
}

export interface AuthResponseSchemaTypes {
  id: number;
  customer_id: string;
  citizenship_number: string;
  full_name: string;
  mobile_number: string;
  dob: string;
  company_pan_number: string;
  license_number: string;
  biometric_status: boolean;
  logged_in_at: string;
  created_at: string;
}

export const loginUser = async (
  data: AuthRequestSchemaTypes
): Promise<AuthResponseSchemaTypes> => {
  const response = await axiosInstance.post(AUTH_APIS.login, data);
  return response?.data;
};

export const logoutUser = async (): Promise<any> => {
  const response = await axiosInstance.post(AUTH_APIS.logout);
  localStorage.removeItem('token');
  return response;
};

export const getUser = async (): Promise<AuthResponseSchemaTypes> => {
  const response = await axiosInstance.get(AUTH_APIS.profile);
  return response?.data?.data;
};
