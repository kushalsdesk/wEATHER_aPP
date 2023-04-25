import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData)
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${url}?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions);
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return{
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`
          }
        })
      }
    } catch (error) {
      console.error(error);
    }

    /* return fetch(
      `${url}?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions
      )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch( (err) => console.log(err));
    */


  };

  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search;