import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface BoxLinkProps {
  code: string;
  name: string;
  icon?: string;
}

export default function BoxLink({ name, code, icon }: BoxLinkProps) {
  return (
    <Link to={code}>
      <Box>
        <Stack direction="column">
          {icon ? <Typography>{icon}</Typography> : null}
          <Typography>{code}</Typography>
          <Typography>{name}</Typography>
        </Stack>
      </Box>
    </Link>
  );
}
