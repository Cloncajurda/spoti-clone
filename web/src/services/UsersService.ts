import axios from "axios";

export type LoginData = {
  email: string
  password: string
}

export type RegisterData = {
  name: string
  email: string
  password: string
}

export default class UsersService {
  private baseUrl: string = 'http://localhost:3000/api/users'

  login(data: LoginData) {
    return axios.post(`${this.baseUrl}/login`, data)
  }

  register(data: RegisterData) {
    return axios.post(`${this.baseUrl}/register`, data)
  }
}