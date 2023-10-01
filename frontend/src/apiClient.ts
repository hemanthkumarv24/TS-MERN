import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'https://localhost:4000/' : '/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
