import { IconButton, Stack } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Stack direction="row" alignItems="center" p={6}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
    </Stack>
  );
}
