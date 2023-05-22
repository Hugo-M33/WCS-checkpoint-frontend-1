import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import BoxLink from "../../../../components/BoxLink";
import { useLoaderData } from "react-router-dom";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Country } from "../../../../apollo/queries";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import useFilter from "../../../../hooks/useFilter";

export default function CountriesPage() {
  const countries = useLoaderData() as Country[];
  const [filter, setFilter] = useState("");
  const countriesList = useFilter(countries, filter);
  return (
    <Stack spacing={3}>
      <Typography>Pays</Typography>
      <TextField
        label="Rechercher un pays..."
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
      <Grid2 container spacing={3}>
        {countriesList?.map((country) => (
          <Grid2 xs={3} key={country.code}>
            <BoxLink
              code={country.code}
              name={country.name}
              icon={country.emoji}
            />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
