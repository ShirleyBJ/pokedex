import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "auto",
          fontWeight: "bold",
          textAlign: "center",
          mt: 1.5,
          p: 1,
          bgcolor: "secondary.main",
          color: "white"
        }}
      >
        <p> Copyright © 2022 | Shirley BERCHEL - M1 Tech Lead</p>
      </Box>
    </>
  );
}

export default Footer;
