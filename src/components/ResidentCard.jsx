import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const residentStatus = {
  Alive: "bg-green-500",

  Dead: "bg-red-500",
  unknown: "bg-gray-500",
};

const ResidentCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();


  
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className="border-solid bottom-1 broder-white">
      <div className="relative">
        <img className="w-full" src={residentInfo?.image} alt="" />
        <div className="absolute bottom-4 left-1/2-translate-x-1/2 bg-[#020A02]/80 text-white p-1 px-2 flex gap-2 items-center rounded-sm">
          <div
            className={`w-3 h-3 ${
              residentStatus[residentInfo?.status]
            } rounded-full `}
          ></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>

      <section className="border-solid bottom-1 broder-white bg-white/20 ">
        |<h3 className="text-white font-Fira_Code font-bold text-center">{residentInfo?.name}</h3>
        <ul>
          <li>
            <span className="text-white/40 font-Fira_Code font-semibold">especies</span>
            <span className="text-white font-Fira_Code font-lite">: {residentInfo?.species}</span>
          </li>
          <li>
            <span className="text-white/40 font-Fira_Code font-semibold">origin</span>
            <span className="text-white font-Fira_Code font-lite">: {residentInfo?.origin.name}</span>
          </li>
          <li>
            <span className="text-white/40 font-Fira_Code font-semibold">Times apear</span>
            <span className="text-white font-Fira_Code font-lite">: {residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
