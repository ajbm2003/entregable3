import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React from "react";

const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({data})=> setLocation(data))
      .catch((err)=>console.log(err))
  };
  return (
    <article className="z-10">
      <form onSubmit={handleSubmit} className="flex justify-center my-[50px]">
        <input
          name="idLocation"
          type="number"
          className="text-white bg-inherit  border-2 border-green-400"
        />
        <button
          type="submit"
          className="z-10 flex gap-2 text-white bg-[#7ecc7b]"
        >
          Search <IconSearch />
        </button>
      </form>
      <section className='z-10 font-["Fira_Code"] grid justify-center my-[50px] gap-5 p-4 text-center border-2 border-green-400 border-opacity-30 h-[130px] '>
        <h3 className="text-[#8EFF8B] h-[5px]">
          ¡Welcome to {location?.name}!
        </h3>
        <ul className="gap-5 text-[#938686] justify-center flex  h-[50px]">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </article>
  );
};

export default Location;
