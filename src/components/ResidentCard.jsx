import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ residentEndPoint }) => {
  const [resident, setResident] = useState(null);
  
  const characterStatus= {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-800"
  }

  useEffect(() => {
    axios
      .get(residentEndPoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className='min-w-250 text-white font-["Fira_Code"]'>
      <header className="border-2 border-solid border-green-400 relative">
        <img
          src={resident?.image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="border-2 border-solid border-green-400 flex gap-4 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-5 py-2 rounded-md">
          <div className={`m-auto h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}> </div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="border-2 border-solid border-green-400 p-4">
        <h4 className="text-2xl">{resident?.name}</h4>
        <ul className="text-sm">
          <li>
            <span className="text-[#938686]">Species:</span> {resident?.species}{" "}
          </li>
          <li>
            <span className="text-[#938686]">Origin:</span>{" "}
            {resident?.origin.name}
          </li>
          <li>
            <span className="text-[#938686]">Times appear:</span>{" "}
            {resident?.episode.length}{" "}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ResidentCard;
