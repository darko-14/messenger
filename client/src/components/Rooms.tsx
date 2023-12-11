import React from "react"
import UserContext from "../context/UserContext"
import '../styles/style.scss'

type PropTypes = {}

type StateTypes = {}

class Rooms extends React.Component<PropTypes, StateTypes> {

    render(): React.ReactNode {
        return (
            <div className="rooms">
                <b>Rooms</b>
                <UserContext.Consumer>
                    {
                        user => (
                            <div>Rooms screen {user?.username} is {user?.isAdmin ? 'admin' : 'user'}</div>
                        )
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default Rooms