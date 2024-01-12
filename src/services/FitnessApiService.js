import axios from "axios";

const BASE_URL = "http://localhost:9800/fitness";

export async function saveFitness(fit) {
  return axios.post(BASE_URL, fit);
}
export async function getAllCustomerFromServer() {
  return axios.get(BASE_URL);
}

export function deleteCustomerFromServer(Name) {
  return axios.delete(`${BASE_URL}/${Name}`);
}

export function getStudentsByNamePattern(pattern) {
  return axios.get(`${BASE_URL}/EMail/${pattern}`);
}
