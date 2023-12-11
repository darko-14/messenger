import React from 'react'
import { UserType } from '../types/types'

const UserContext =  React.createContext<UserType | null>(null)

export default UserContext

