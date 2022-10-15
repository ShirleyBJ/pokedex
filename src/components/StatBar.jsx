import {LinearProgress, Box} from '@mui/material';


function StatBar({statsDetails}) {
  return (
    <>
      {statsDetails.stats.map((statDetail,index) => (
        <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{width:"30%", textAlign:"left"}}>
          <span>{statDetail.stat.name}</span>
        </Box>
        <Box>
          <span>{statDetail.base_stat}</span>
        </Box>
        <Box sx={{ width: "60%" }}>
          <LinearProgress
            variant="determinate"
            value={statDetail.base_stat}
            color="secondary"
          />
        </Box>
      </Box>
      ))}
      
    </>
  );
}

export default StatBar;
