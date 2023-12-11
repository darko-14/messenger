import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Menu from "./pages/Menu/Menu"
import Chat from "./pages/Chat/Chat"
import { UserType } from "./types/types"
import UserContext from "./context/UserContext"
import './styles/style.scss'

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
        return (
        <div className="app">
          <div className="header">
            <div className="logo">Messenger</div>
            <div className="user">{this.fakeUser.username}</div>
          </div>
          <div className="main">
            {
              this.state.user ? 
              <Routes>
                {!this.state.user && <Route path="*" element={<Navigate replace to="/login" />}/>}
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
              </Routes> :
              <UserContext.Provider value={this.fakeUser}>
                <Routes>
                  <Route path="*" element={<Navigate replace to="/menu" />}/>
                  <Route path="/menu" element={<Menu />}/>
                  <Route path="/chat" element={<Chat />}/>
                </Routes>
              </UserContext.Provider>
            }
          </div>
        </div>
      )
    }

}

export default App