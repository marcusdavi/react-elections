import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Select from "../components/Select";
import Loading from "../components/Loading";
import Error from "../components/Error";

import {
  apiGetAllCities,
  apiGetAllCandidates,
  apiGetCityElection,
} from "../service/apiService";
import CityHeader from "../components/CityHeader";
import CandidateCards from "../components/CandidateCards";
import CandidateCard from "../components/CandidateCard";

export default function ElectionsPage() {
  const [allCities, setAllCities] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [cityElection, setCityElection] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllCities() {
      try {
        const apiCities = await apiGetAllCities();
        setAllCities(apiCities);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllCities();
  }, []);

  useEffect(() => {
    async function getAllCandidates() {
      try {
        const apiCandidates = await apiGetAllCandidates();
        setAllCandidates(apiCandidates);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllCandidates();
  }, []);

  useEffect(() => {
    async function getCityElection() {
      try {
        const apiElections = await apiGetCityElection(selectedCity?.id);
        const electionAsc = apiElections.sort((a, b) => b.votes - a.votes);
        setCityElection(electionAsc);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    getCityElection();
  }, [selectedCity]);

  function handleSelectChange(cityId) {
    const city = allCities.find((c) => c.id === cityId);
    setSelectedCity(city);
  }

  let mainJsx = (
    <div className="flex justify-center my-4">
      <Loading />
    </div>
  );

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }

  if (!loading && !error) {
    mainJsx = (
      <>
        <div className="border p-2 text-center m-2">
          <Select
            cities={allCities}
            labelDescription="Município: "
            onSelectChange={handleSelectChange}
          />
        </div>
        {selectedCity && (
          <div>
            <CityHeader
              selectedCity={selectedCity}
              totalCandidates={cityElection.length}
            />
            <CandidateCards>
              {cityElection.map((election, index) => {
              const winner = index === 0;
              const candidate = allCandidates.find((candidate) => candidate.id === election.candidateId);
              const percent = 100 * ((election.votes / selectedCity.presence));
              const electionFull ={...election, percent ,name: candidate.name, username: candidate.username, winner};
                return (
                  <CandidateCard key={electionFull.id}>{electionFull}</CandidateCard>
                );
              })}
            </CandidateCards>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <Header>react-elections</Header>
      <Main>{mainJsx}</Main>
    </>
  );
}
