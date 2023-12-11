import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Menu from "./pages/Menu/Menu"
import Chat from "./pages/Chat/Chat"
import { UserType } from "./types/types"
import UserContext from "./context/UserContext"

type PropsType = {}

type StateType = {
  user: any
}

class App extends React.Component<PropsType, StateType> {

  private fakeUser: UserType

  constructor(props: any) {
    super(props)
    this.state = {
      user: null
    }

    this.fakeUser = {
        username: "Darko",
        isAdmin: true
    }

  }

    render(): React.ReactNode {
      if (!this.state.user) {
        return (
            <Routes>
              {!this.state.user && <Route path="*" element={<Navigate replace to="/login" />}/>}
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
            </Routes>
        )
      }
        return (
          <UserContext.Provider value={this.fakeUser}>
            <Routes>
              <Route path="*" element={<Navigate replace to="/menu" />}/>
              <Route path="/menu" element={<Menu />}/>
              <Route path="/chat" element={<Chat />}/>
            </Routes>
          </UserContext.Provider>
        )
    }

}

export default App