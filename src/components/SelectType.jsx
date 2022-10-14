import React, {useState} from 'react';
import { useQuery } from "react-query";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectType() {
  // const { isLoading, dataType, error } = useQuery("pokemonUrl", () =>
  //   fetch("https://pokeapi.co/api/v2/type/")
  //   .then((res) =>res.json())
  // );

//Get types into states
  // const [type, setType] = useState('');

  // const handleChange = (e) => {
  //   setType(e.target.value);
  //   console.log(type)
  // };

  // if(isLoading) return "Loading...";

  // if(error) return "An error has occured " + error.message

  return (
    <div>
      
    </div>
    // <>
    //   <div>
    //   <FormControl sx={{ m: 1, minWidth: 80 }}>
    //     <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-autowidth-label"
    //       id="demo-simple-select-autowidth"
    //       value={type}
    //       onChange={handleChange}
    //       autoWidth
    //       label="type"
    //       name="types"
    //     >
    //       <MenuItem value="">
    //         <em>None</em>
    //       </MenuItem>
    //       {/* {dataType.results.map((type, index) =>
    //       (
    //         <MenuItem key={index} value={type}>{type}</MenuItem>
    //       ))} */}
    //       <MenuItem value={type}>Type 1</MenuItem>
    //     </Select>
    //   </FormControl>
    // </div>
    // </>
  );
}

export default SelectType;