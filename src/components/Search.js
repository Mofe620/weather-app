import React from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { RAPID_API_OPTIONS, RAPID_API_URL } from '../api_data';

export default function Search({selectCity}) { 

    const [search, setSearch] = React.useState(null);

    function handleChange(searchData){
            setSearch(searchData);
            selectCity(searchData);
    }
    
    function loadOptions(search){

      return  fetch(`${RAPID_API_URL}/cities?minPopulation=100000&namePrefix=${search}`, RAPID_API_OPTIONS)
                .then(response => response.json())
                .then(response => {
                    return {
                    options: response.data.map((city) => {
                        return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                    };
                })
                .catch(err => console.error(err));

    }

  return (
    <AsyncPaginate debounceTimeout={600} placeholder="Search for City" value={search} onChange={handleChange} loadOptions={loadOptions}/>
  )
}
