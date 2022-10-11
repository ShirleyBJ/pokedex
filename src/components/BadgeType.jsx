import Chip from "@mui/material/Chip";

//TODO: change the color of label whith types of pokemon
function BadgeType({typeList}) {
  return (
    <>
    {typeList.types.map((type, index) => (
      <Chip 
      key= {index} 
      label={type.type.name} 
      color= "secondary" 
      sx={{
        m: 0.5,
      }}
      />
    ))}
    </>
  )
}

export default BadgeType;
