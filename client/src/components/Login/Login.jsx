import React from "react";
import { Box } from "@mui/material";

function Login() {
  return (
    <Box>
      <h2>Logowanie (bez funkcjonalności)</h2>
      
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      </Box>
  );
}

export default Login;