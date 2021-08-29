import { getCities, getCandidates, getCityElection } from "./httpService";

export async function apiGetAllCities() {
  return await getCities("/cities");
}

export async function apiGetAllCandidates() {
  return await getCandidates("/candidates");
  
}

export async function apiGetCityElection(cityId) {
  return await getCityElection(`/election?cityId=${cityId}`);
}
