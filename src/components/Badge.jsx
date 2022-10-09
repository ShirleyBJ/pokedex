import Chip from "@mui/material/Chip";

function Badge({height,weight}){
    return(
        <Chip
        label = {height ? height +" m" : weight + " kg"} />
    )
}

export default Badge;