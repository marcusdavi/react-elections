export default function CandidateCards({ children: candidateCards }) {
  return (
    <div className="border p-2 flex flex-row items-center justify-center flex-wrap ">
      {candidateCards}
    </div>
  );
}
