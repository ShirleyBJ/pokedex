import Chip from "@mui/material/Chip";

function BadgeAbilities({abilitiesList}) {
  return (
    <>
      {abilitiesList.abilities.map((ability, index) => (
        <Chip
          key={index}
          label={ability.ability.name}
          sx={{
            m: 0.5,
          }}
          variant="outlined"
        />
      ))}
    </>
  );
}

export default BadgeAbilities;
