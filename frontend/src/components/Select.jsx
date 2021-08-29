import { getNewId } from "../service/idService";

export default function Select({
  idComponent = getNewId(),
  labelDescription = "Descrição da Label:",
  cities,
  onSelectChange = null
}) {

  function handleSelectChange({ currentTarget }) {
    if (onSelectChange) {
      const newValue = currentTarget.value;
      onSelectChange(newValue);
    }
  }

  return (
    <div>
      <h3 className="font-bold">{labelDescription}</h3>
      <select className="border border-black ph-2 m-2" id={idComponent} onChange={handleSelectChange}>
        <option>Selecione um município</option>
        {cities.map((city) => {
          return (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
