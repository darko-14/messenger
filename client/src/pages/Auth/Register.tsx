import React from "react";
import "../../styles/style.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
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
  registerUser: ({
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
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password,
    });
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
            // noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoComplete="username"
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
              sx={{ mt: 1, mb: 4 }}
              startIcon={<PersonIcon />}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <div>Already have an account?</div>
        <Grid container mb={2} gap={2}>
          <Grid item xs>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 4 }}
            >
              <Link to="/login">Sign In</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Register;
