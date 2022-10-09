import Typography from "@mui/material/Typography";

function CardSubtitle({ title }) {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        m: 1,
      }}
    >
      {title}
    </Typography>
  );
}

export default CardSubtitle;
