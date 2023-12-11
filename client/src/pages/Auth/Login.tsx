import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";

class Login extends React.Component {
  handleSubmit = () => {};

  enterAsGuest = () => {};

  render(): React.ReactNode {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={this.handleSubmit}
            noValidate
            sx={{ mt: 5 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 4 }}
            >
              Sign In
            </Button>

           <div>Don't have an account?</div>
            <Grid container mb={2} gap={2}>
              <Grid item xs>
                <Button
                  onClick={this.enterAsGuest}
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 1, mb: 4 }}
                >
                  <Link to="/register">Sign Up</Link>
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  onClick={this.enterAsGuest}
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 1, mb: 4 }}
                >
                  Enter as a Guest
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default Login;
