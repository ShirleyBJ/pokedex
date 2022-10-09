import { Box } from "@mui/material";
import { shadows } from "@mui/system";

function AllPokemon() {
  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          width: "95%",
          height: "75vh",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          p: 1,
          m: "0 auto",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <h1> Pokemon List </h1>
      </Box>
    </>
  );
}

export default AllPokemon;
