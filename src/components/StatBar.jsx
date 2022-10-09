import {LinearProgress, Box} from '@mui/material';


function StatBar({stats, statTitle}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{width:"15%"}}>
          <span>{statTitle}</span>
        </Box>
        <Box>
          <span>{stats}</span>
        </Box>
        <Box sx={{ width: "70%" }}>
          <LinearProgress
            variant="determinate"
            value={stats}
            color="secondary"
          />
        </Box>
      </Box>
    </>
  );
}

export default StatBar;
