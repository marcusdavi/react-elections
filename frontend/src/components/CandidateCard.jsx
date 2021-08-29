import {formatNumber, formatPercent} from '../helpers/NumberFormat'

export default function CandidateCard({ children: candidate }) {
  const photo = `/img/${candidate.username}.png`;
  const classNameText = candidate.winner
    ? "text-indigo-600"
    : "text-yellow-600";

    const classNameBgCandidate = candidate.winner
    ? "bg-indigo-100"
    : "bg-yellow-100";

    const percent = formatPercent(candidate.percent);
    const votes = formatNumber(candidate.votes);

  return (
    <div className={`shadow-xl p-2 m-2 w-72 h-56 font-semibold ${classNameBgCandidate}`}>
      <div className="flex flex-row justify-between p-2 m-2">
        <img
          className="rounded-full max-h-20"
          src={photo}
          alt={candidate.username}
        />
        <div className="flex flex-col items-center text-center my-auto">
          <div className={`text-lg ${classNameText}`}>{percent}</div>
          <div className="text-sm">{votes} votos</div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center p-2 mt-4">
        <div className="text-2xl">{candidate.name}</div>
        <div className={`text-xl mt-4 ${classNameText}`}>
          {candidate.winner ? "Eleito" : "Não Eleito"}
        </div>
      </div>
    </div>
  );
}
