import { Link } from "react-router-dom";

export  function NavButton({ icon, text, to }) {
    return (
        <Link
          to={to}
          className="w-14 h-14 bg-[#E1E8EF] flex flex-col justify-center items-center cursor-pointer border rounded-md my-2 p-2"
        >
          <div className="icon">{icon}</div>
          <div className="text">{text}</div>
        </Link>
    );
  }