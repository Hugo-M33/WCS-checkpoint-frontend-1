import React, { useEffect } from "react";
import "./App.css";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location && location.pathname === "/") {
      navigate("/continents", { replace: true });
    }
  }, [location]);
  const outlet = useOutlet();
  return (
    <div className="App">
      <Header />
      <Box py={4} px={8}>
        {outlet}
      </Box>
    </div>
  );
}

export default App;
