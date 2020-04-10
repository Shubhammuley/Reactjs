import React from 'react'

const UserContext =React.createContext("My app");

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider ,UserConsumer}
export default UserContext