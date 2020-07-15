import React from "react";

const UserContext = React.createContext({
    isManager : false,
    role: '',
    rank: '',
    firstName: '',
    lastName: '',
    occupation: '',
    available: false,
    mounted: false,
    username: '',
    password: '',
});

export default UserContext;
