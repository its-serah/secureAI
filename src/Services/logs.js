import axios from "axios";
const baseUrl = 'http://localhost:3001/logs/'

export const getLogs = () =>
  axios.get(baseUrl).then(res => res.data)