import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectTo({ to }: { to: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  }, []);
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography variant="h1">Redirection...</Typography>
    </Stack>
  );
}
