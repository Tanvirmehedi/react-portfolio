export function InfoDetails({ infoName, infoData, icon }) {
    return (
      <div className="phone border-b-2 text-start flex items-center gap-4 py-3">
        <div className="icon rounded-md">{icon}</div>
        <div className="phone-text text-sm font-thin">
          <p className="-mb-1 text-gray-400">{infoName}</p>
          {infoData}
        </div>
      </div>
    );
  }