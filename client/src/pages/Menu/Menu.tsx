import React from "react"
import { UserType } from "../../types/types"
import ActiveUsers from "../../components/ActiveUsers"

type PropTypes = {}

type StateTypes = {}

class Menu extends React.Component<PropTypes, StateTypes> {

    render(): React.ReactNode {
        return (<>
            <div>Menu screen</div>
            
            <ActiveUsers />
        </>
        )
    }

}

export default Menu