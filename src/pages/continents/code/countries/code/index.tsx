import { useLoaderData } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Country } from "../../../../../apollo/queries";
import { Phone } from "@mui/icons-material";

export default function CountryDetail() {
  const country = useLoaderData() as Country;
  const { name, emoji, capital, code, phone } = country;

  return (
    <Box>
      <Stack spacing={3}>
        <Typography fontSize={128}>{emoji}</Typography>
        <Typography fontSize={24}>
          <b>{name}</b> ({code})
        </Typography>
        <Typography fontSize={24}>
          <i>{capital}</i>
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Phone />
          <Typography textAlign="center">+{phone}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
