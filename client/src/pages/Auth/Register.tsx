import React from "react";
import "../../styles/style.scss";
import { Link } from "react-router-dom";
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
  registerUser: () => void;
};

type StateTypes = {
  username: string;
  password: string;
  confirm_password: string;
};

class Register extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm_password: "",
    };
  }

  handleSubmit = () => {
    
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
            Sign up
          </Typography>

          <Box
            component="form"
            onSubmit={this.handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              autoComplete="username"
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
              id="password"
              autoComplete="password"
            />
            <TextField
              value={this.state.confirm_password}
              onChange={(e) =>
                this.setState({ confirm_password: e.target.value })
              }
              margin="normal"
              required
              fullWidth
              error
              label="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="confirm_password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login">Already have an account? Sign In</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default Register;
