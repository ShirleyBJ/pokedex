import Chip from "@mui/material/Chip";
import dataAbilities from "../dataAbilities.json";

function BadgeAbilities() {
  return (
    <>
    {dataAbilities.map((data) => (
        data.abilities.map((abilitiesName, index) => 
        <Chip 
        key = {index}
        label = { abilitiesName.ability.name}
        sx={{
          m: 0.5,
        }}
        variant="outlined" />)
      ))
    }
    </>
  );
}

export default BadgeAbilities;
