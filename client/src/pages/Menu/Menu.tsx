import React from "react"
import Users from "../../components/Users"
import Rooms from "../../components/Rooms"
import '../../styles/style.scss'


type PropTypes = {}

type StateTypes = {}

class Menu extends React.Component<PropTypes, StateTypes> {

    render(): React.ReactNode {
        return (<div className="menu">
            <main>
                <Users />
                <Rooms />            
            </main>
            <div className="new_room">Create new room</div>
        </div>
        )
    }

}

export default Menu