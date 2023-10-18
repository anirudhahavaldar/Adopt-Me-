import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name=""
            value={animal}
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            {breeds.map((breed) => (
              <option key={breed}>{breed} </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
