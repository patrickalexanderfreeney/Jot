import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { authContext } from '../../context/authStore';
import { SignUp, LogIn } from '../../index'

const AuthPage = () => {
    const [ state ] = useContext(authContext);

    return (
        <Grid container direction='column'>
            <Grid item>

            </Grid>
            <Grid item>
                {alert(`The 'currentPage' value is '${state.currentPage}'` )}
            {state.currentPage === 'login' && <LogIn/>}
            {state.currentPage === 'signup' && <SignUp/>}
            {/* {state.currentPage === '' && <LogIn/>} */}
            </Grid>
            
        </Grid>
    )
}

export default AuthPage;
