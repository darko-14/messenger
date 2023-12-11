import React from "react";
import UserContext from "../context/UserContext";
import "../styles/style.scss";

type PropTypes = {};

type StateTypes = {};

class Users extends React.Component<PropTypes, StateTypes> {
  render(): React.ReactNode {
    return (
      <div className="users">
        <b>Users</b>
        <UserContext.Consumer>
          {(user) => (
            <div>
              Users screen {user?.username} is{" "}
              {user?.isAdmin ? "admin" : "user"}
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Users;