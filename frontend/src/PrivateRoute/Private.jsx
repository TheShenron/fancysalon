import React from 'react';

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


function Private({children}) {

    const {isAuth , token} = useSelector(state=>state)
    console.log(isAuth , token)

    if(!isAuth){
        return <Navigate to='/'/>
    }

    return children 
}

export default Private;