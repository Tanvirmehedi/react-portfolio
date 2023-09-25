export function NameCard() {
    return (
      <div className="name-card flex flex-col justify-center items-center gap-2">
        <div className="profile-image rounded-lg w-32 h-32 overflow-hidden -mt-16 lg:-mt-24">
          <img
            className="max-h-fit"
            src="https://i.ibb.co/xz7GpN4/IMG-20210116-WA002fgggggggggggggggggggggggggg6-png.jpg"
            alt="profile-img"
          />
        </div>
        <div className="profile-name text-2xl font-semibold">
          H M Tanvir Mehedi
        </div>
        <div className="profile-designation font-thin text-sm text-gray-400">
          FullStack Developer
        </div>
      </div>
    );
  }