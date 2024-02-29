type AdditionalInfoProps = {
  airConditioning: boolean;
  parkingSpace: boolean;
  pets: boolean;
  pool: boolean;
  wifi: boolean;
  tv: boolean;
};

function AdditionalInfo({ amenities }: { amenities: AdditionalInfoProps }) {
  return (
    <div className="h-fit border-t-2 p-2 px-2 text-xs">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Amenities:</h3>
          <ul className="flex gap-2 pl-2">
            {Object.entries(amenities).map(([key, value]) => (
              <li className="border-2 bg-slate-50 p-1" key={key}>
                {key}: {value ? '✔️' : '❌'}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <div>Price</div>
          <button className="rounded-md border-2 bg-blue-500 p-2 font-semibold text-white">
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
