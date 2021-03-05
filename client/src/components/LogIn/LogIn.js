import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Button, Input, Paper } from '@material-ui/core';
import Axios from 'axios';

export default function LogIn(props){
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const history = useHistory();

	const logIn = async (e) => {
		e.preventDefault();

		setIsLoading(true);
		setIsError(false);

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const response = await Axios.post(
				'http://localhost:3000/login',
				{
					username,
					password
				},
				config
			);
			console.log(response);

			if (response.data.status === 200) {
				localStorage.setItem(
					'username',
					JSON.stringify(response.data.username)
				);
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('id', response.data.id);
				setIsLoading(false);
				setIsError(false);
				console.log(isError);
				history.push('/home');
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	};

	return (
		<section styles={{ height:'100vh', position: 'relative'}}>
			<Paper style={{position: 'absolute', transform: 'translate(50%, 50%)', top:'5%', right: '50%', width:'30%', height:'40%'}}>
          <Grid container direction='column' style={{alignSelf:'center'}} align="center" justify="center">
				    <h2>Log In</h2>
              <form onSubmit={logIn}>
                  <Grid container item direction='column' alignItems='center' justify='center' >
                    <Grid item>
                    <Input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type='text'
                      placeholder='username'
                      autoFocus
                      fullWidth
                      />
                    </Grid>
                    <Grid item>
                    <Input
                      type='password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder='password'
                    />
                    </Grid>
                    <Grid item>
                    <Button disabled={isLoading} onClick={logIn}>
                      {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                </Grid>
                </Grid>
              </form>
				<Link to='/signup'>Don't have an account?</Link>
				<Link to='/Welcome'>Go back</Link>
        </Grid>
			</Paper>
		</section>
	);
};
