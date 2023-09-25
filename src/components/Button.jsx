export function Button({ href, icon, text }) {
    return (
      <div className="resume mt-6 m-auto flex flex-row justify-center items-center">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="resume-btn rounded-full cursor-pointer p-3 text-xl flex flex-row gap-x-2 justify-center items-center bg-gradient-to-r from-[#1BBAD6] to-[#FFCE42] text-white">
            <div className="icon -mt-1">{icon}</div>
            <div className="btn-text text-sm">{text}</div>
          </button>
        </a>
      </div>
    );
  }