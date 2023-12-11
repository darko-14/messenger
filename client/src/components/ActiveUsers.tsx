import React from "react"
import UserContext from "../context/UserContext"

type PropTypes = {}

type StateTypes = {}

class ActiveUsers extends React.Component<PropTypes, StateTypes> {

    render(): React.ReactNode {
        return (
            <UserContext.Consumer>
                {
                    user => (
                        <div>ActiveUsers screen {user?.username} is {user?.isAdmin ? 'admin' : 'user'}</div>
                    )
                }
            </UserContext.Consumer>
        )
    }
}

export default ActiveUsers