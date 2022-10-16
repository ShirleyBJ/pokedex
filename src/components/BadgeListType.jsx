import { useQuery } from "react-query";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Loader from './Loader'

function MenuBadgeType({ searchByType }) {
  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
    fetch("https://pokeapi.co/api/v2/type/").then((res) => res.json())
  );

  if(isLoading) return (
    <Loader/>
  )

  if (error) return "An error has occured " + error.message;
  return (
    <>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection:"column",flexWrap: "wrap", justifyContent: "center",alignItems:"center", m:3 }} >
        <h4> Select a type : </h4>
        <Box sx={{display: "flex",flexWrap: "wrap", justifyContent: "center",}}>
            {data.results.map((type, index) => (
              <Chip
                className={`badge-type--${type.name}`}
                key={index}
                label={type.name}
                sx={{
                  m: 0.5,
                }}
                onClick={() => searchByType(type.name)}
              />
            ))}
          </Box>
      </Paper>
    </>
  );
}

export default MenuBadgeType;
