import {LinearProgress, Box} from '@mui/material';


function StatBar({statsDetails}) {
  console.log(statsDetails);
  return (
    <>
      {statsDetails.stats.map((statDetail,index) => (
        <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{width:"15%"}}>
          <span>{statDetail.stat.name}</span>
        </Box>
        <Box>
          <span>{statDetail.base_stat}</span>
        </Box>
        <Box sx={{ width: "70%" }}>
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
