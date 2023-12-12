import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Menu from "./pages/Menu/Menu";
import Chat from "./pages/Chat/Chat";
import { UserType } from "./types/types";
import UserContext from "./context/UserContext";
import "./styles/style.scss";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import LogoutIcon from "@mui/icons-material/Logout";

type PropsType = {};

type StateType = {
  user: any;
};

class App extends React.Component<PropsType, StateType> {
  private fakeUser: UserType;

  constructor(props: any) {
    super(props);
    this.state = {
      user: null,
    };

    this.fakeUser = {
      username: "Darko",
      isAdmin: true,
    };
  }

  registerUser = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: {
        name: 'Darko'
      }

      
    })

    alert("register:" + username);
  };

  enterAsGuest = () => {
    alert("hello guest");
  };

  login = ({ username, password }: { username: string; password: string }) => {
    alert("login:" + username);
  };

  logout = () => {
    alert("logged out");
    this.setState({ user: null });
    // remove from localstorage
  };

  render(): React.ReactNode {
    return (
      <div className="app">
        <div className="header">
          <div className="logo">
            <ModeCommentIcon color="primary" />
            <div>Messenger</div>
          </div>

          {this.state.user ? (
            <div className="space-between">
              <LogoutIcon
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={this.logout}
              />
              <div className="user">{this.fakeUser.username}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="main">
          {this.state.user ? (
            <Routes>
              {!this.state.user && (
                <Route path="*" element={<Navigate replace to="/login" />} />
              )}
              <Route
                path="/login"
                element={
                  <Login
                    enterAsGuest={this.enterAsGuest}
                    login={this.enterAsGuest}
                  />
                }
              />
              <Route
                path="/register"
                element={<Register registerUser={this.registerUser} />}
              />
            </Routes>
          ) : (
            <UserContext.Provider value={this.fakeUser}>
              <Routes>
                <Route path="*" element={<Navigate replace to="/menu" />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </UserContext.Provider>
          )}
        </div>
      </div>
    );
  }
}

export default App;
