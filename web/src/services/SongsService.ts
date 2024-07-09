import axios from "axios"

export default class SongsServices {
  private baseUrl: string = 'http://localhost:3000/api/songs'

  create(data: any) {
    return axios.post(`${this.baseUrl}/upload`, data, {
      headers: {
        Authorization: localStorage.getItem('codetunes-token')
      }
    })
  }

  deleteById(artistId: number) {
    return axios.delete(`${this.baseUrl}/${artistId}`, {
      headers: {
        Authorization: localStorage.getItem('codetunes-token')
      }
    })
  }
}