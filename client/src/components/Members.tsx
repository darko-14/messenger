import React from "react"
import UserContext from "../context/UserContext"

type PropTypes = {}

type StateTypes = {}

class Members extends React.Component<PropTypes, StateTypes> {

    render(): React.ReactNode {
        return (
            <UserContext.Consumer>
                {
                    user => (
                        <div>Members screen {user?.username} is {user?.isAdmin ? 'admin' : 'user'}</div>
                    )
                }
            </UserContext.Consumer>
        )
    }
}

export default Members