import { useEffect } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import { useState } from "react";
import Location from "./components/Location";
import ResidentList from "./components/residentList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = e.target.locationId.value;
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);
  

//bg-[url('/images/bg.png')] bg-cover 
  return (
    <div className="App place-content-center min-h-screen px-2 bg-[url('/images/bg.png')] bg-cover ">
      <article className=' bottom-10 item-center relative content-center bg-[url("../public/images/bg-h.png")] bg-cover'>
        <section className="mx-auto item-center content-center relative">
          <div className="mx-auto flex item-center bg-cover">
            <div className="mx-auto flex item-center bg-cover">
              <img
                className="mx-auto top-1/2 h-[100px] w-[350px] absolute"
                src="./public/images/logo1.png"
                alt=""
              />

              <img
                className="mx-auto h-[250px] w-[350px]"
                src="./public/images/portal.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="flex h-full w-full">
          <img
            className="top-0 mx-auto absolute"
            src="./public/images/Ellipse.png"
            alt=""
          />
        </div>
      </article>

      <form
        className="flex justify-center items-center mx-auto py-3 top-full"
        onSubmit={handleSubmit}
      >
        <div className="absolute  mb-4 flex item-center flex-wrap items-stretch  mx-auto">
          <input
            id="locationId"
            placeholder="type a location Id..."
            className=" mt-10 relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-green-700/90 bg-black/5 bg-clip-padding px-3 py-1.5 text-base font-fira_code text-[EFF5#8B] outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500 "
            type="text"
          />
          <button className="text-white px-5 item-center border-green-700/90 bg-green-300/60 w-[215px] h-[60px] flex items-center text-center font-Fira_Code mt-10">
            search<i className="  px-6 bx bx-search my-auto items-center"></i>
          </button>
        </div>

        <h2 className="absolute text-white flex item-center flex-wrap items-stretch  mx-auto top-1/2 my-auto">welcome to the crazy universe!</h2>
      </form>

      <Location location={location} />
      <ResidentList location={location} />
    </div>
  );
}

export default App;
