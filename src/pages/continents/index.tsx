import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { Continent, GET_CONTINENTS_QUERIES } from "../../apollo/queries";
import { Search } from "@mui/icons-material";
import BoxLink from "../../components/BoxLink";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useFilter from "../../hooks/useFilter";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ContinentsPage() {
  const continents = useLoaderData() as Continent[];
  const [filter, setFilter] = useState("");
  const continentsList = useFilter(continents, filter);

  return (
    <Stack spacing={3}>
      <Typography>Continents</Typography>
      <TextField
        label="Rechercher un continent"
        defaultValue={filter}
        onChange={(e) => setFilter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Grid2 spacing={4} container>
        {continentsList?.map((continent) => (
          <Grid2 xs={3} key={continent.code}>
            <BoxLink code={continent.code} name={continent.name} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
