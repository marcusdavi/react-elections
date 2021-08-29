import {formatNumber} from '../helpers/NumberFormat'

export default function CityHeader({ selectedCity: city, totalCandidates }) {
  return (
    <div className="border p-2 m-2 text-center">
      <header className="font-bold text-xl">Eleição em {city.name}</header>
      <div className="flex flex-row justify-evenly m-3">
        <span><strong>Total de Eleitores:</strong> {formatNumber(city.votingPopulation)}</span>
        <span><strong>Abstenção:</strong> {formatNumber(city.absence)}</span>
        <span><strong>Comparecimento:</strong> {formatNumber(city.presence)}</span>
      </div>
      <div className="font-bold text-sm">{totalCandidates} Candidatos</div>
    </div>
  );
}
