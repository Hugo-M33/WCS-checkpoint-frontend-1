import { useLoaderData } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
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
        <Stack direction="row" justifyContent="center" gap={8}>
          <Stack
            boxShadow={"2px 3px 4px rgba(0.1, 0.05, 0.075, 0.3)"}
            minWidth={200}
          >
            <List subheader={<ListSubheader>Languages</ListSubheader>}>
              {country.languages?.map((language) => (
                <ListItem key={language.name}>
                  <ListItemText primary={language.name} />
                </ListItem>
              ))}
            </List>
          </Stack>
          <Stack
            boxShadow={"2px 3px 4px rgba(0.1, 0.05, 0.075, 0.3)"}
            minWidth={200}
          >
            <List subheader={<ListSubheader>States</ListSubheader>}>
              {country.states?.map((state) => (
                <ListItem key={state.code}>
                  <ListItemText primary={state.name} secondary={state.code} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
