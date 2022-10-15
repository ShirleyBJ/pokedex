import { useQuery } from "react-query";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

function MenuBadgeType({ searchByType }) {
  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
    fetch("https://pokeapi.co/api/v2/type/").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occured " + error.message;
  return (
    <>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", m:3 }} >
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
      </Paper>
    </>
  );
}

export default MenuBadgeType;
