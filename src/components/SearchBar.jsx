import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

function SearchBar() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", }}>
        <FormControl
          sx={{
            m: 3,
            width: "50%",
          }}
        >
          <InputLabel 
          htmlFor="outlined-basic"
          color = "secondary"
          sx={{
            p:2,
          }}
          >
            <SearchIcon 
            sx={{ 
              mr:2,
            }}
            /> 
            Rechercher un pokémon par son ID ou son nom
          </InputLabel>
          <Input
            id="outlined-basic"
            type="search"
            color="secondary"
            sx={{
              p:1.5,
            }}
          />
        </FormControl>
      </Box>
    </>
  );
}

export default SearchBar;
