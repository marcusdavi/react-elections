import axios from "axios";

const BASE_URL ="http://localhost:3001"

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function getCities(url) {
  const { data } = await api.get(url);
  return data;
}

export async function getCandidates(url) {
  const { data } = await api.get(url);
  return data;
}

export async function getCityElection(url) {
  const { data } = await api.get(url);
  return data;
}

