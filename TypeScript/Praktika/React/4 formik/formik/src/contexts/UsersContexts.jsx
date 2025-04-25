import { useState, useEffect, useReducer, createContext } from 'react'

export const UsersActionTypes = {
    SetData: 'onload sets up fetched data to state',
    AddUser: 'adds new user to the state',
}

const reducer = (state, action) => {
    switch (action.type) {
        case UsersActionTypes.SetData:
            return  action.data;
            default:
                console.error(`No such type: ${action.type}`);
                return state;
    }
}

const UserContext = createContext();
const UserProvider = ({ children }) => {

    const [users, dispatch] = useReducer(reducer, null);
    const [loggedInUser, setLoggedInUser] = useState(undefined);

    useEffect(() => {
        fetch(`jjjjj`)
            .then(res => res.json())
            .then(data => dispatch({
                type: UsersActionTypes.SetData,
                data: data
            }))
    })

    return (
        <UserContext.Provider
            value={{
                users,
                dispatch,
                loggedInUser,
                setLoggedInUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export