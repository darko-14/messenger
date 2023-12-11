import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";

type PropTypes = {
  enterAsGuest: () => void;
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
};

type StateTypes = {
  username: string;
  password: string;
};

class Login extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = () => {
    this.props.login(this.state);
  };

  enterAsGuest = () => {
    this.props.enterAsGuest();
  };

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

          <Box sx={{ mt: 5 }}>
            <TextField
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
            />
            <TextField
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={this.handleSubmit}
              sx={{ mt: 5, mb: 4 }}
              startIcon={<LoginIcon />}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <div>Don't have an account?</div>
        <Grid container mb={2} gap={2}>
          <Grid item xs>
            <Button fullWidth variant="outlined" sx={{ mt: 1, mb: 4 }}>
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
      </Container>
    );
  }
}

export default Login;
