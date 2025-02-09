import axios from "axios";
const baseUrl = 'http://localhost:3001/people/'

export const getPeople = () =>
  axios.get(baseUrl).then(res => res.data)

export const addPerson = person =>
  axios.post(baseUrl, person).then(res => res.data)