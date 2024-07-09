import axios from "axios"

export default class AritstsService {
  private baseUrl: string = 'http://localhost:3000/api/artists'

  getAll() {
    return axios.get(`${this.baseUrl}`, {
      headers: {
        Authorization: localStorage.getItem('codetunes-token')
      }
    })
  }

  getById(id: string) {
    return axios.get(`${this.baseUrl}/${id}`, {
      headers: {
        Authorization: localStorage.getItem('codetunes-token')
      }
    })
  }

  create(data: any) {
    return axios.post(this.baseUrl, data, {
      headers: {
        Authorization: localStorage.getItem('codetunes-token')
      }
    })
  }
}