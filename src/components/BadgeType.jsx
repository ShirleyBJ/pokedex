import Chip from "@mui/material/Chip";
import dataTypes from '../dataTypes.json';

function BadgeType() {
  return (
    <>
    {dataTypes.map((type) => (
      <Chip 
      key= {type.id} 
      label={type.type} 
      color= "secondary" //TODO: change the color of label whith types of pokemon
      sx={{
        m: 0.5,
      }}
      />
    ))}
    </>
  )
}

export default BadgeType;
