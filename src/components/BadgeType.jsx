import "./BadgeType.scss";
import Chip from "@mui/material/Chip";

function BadgeType({typeList}) {
  return (
    <>
    {typeList.types.map((type, index) => (
      <Chip 
      className={`badge-type--${type.type.name}`}
      key= {index} 
      label={type.type.name} 
      sx={{
        m: 0.5,
      }}
      />
    ))}
    </>
  )
}

export default BadgeType;
