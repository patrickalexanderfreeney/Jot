import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Paper, Button, Input, makeStyles, Grid } from '@material-ui/core'
import Axios from 'axios';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [signedup, setSignedup] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const signUp = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			console.log(username);
			const response = await Axios.post(
				'http://localhost:3000/users',
				{
					username,
					password
				},
				config
			);
			console.log(response);
			setIsLoading(false);
			setSignedup(true);
		} catch (error) {}
	};
	if (signedup) {
		return <Redirect to='/login' />;
	}

	return (

		<section styles={{ height:'100vh', position: 'relative'}}>
			<Paper style={{position: 'absolute', transform: 'translate(50%, 50%)', top:'5%', right: '50%', width:'30%', height:'40%'}}>
				<Grid container direction='column' style={{alignSelf:'center'}} align="center" justify="center">
					<h2>Sign Up</h2>
						<form>
							<Grid container item direction='column' alignItems='center' justify='center' >
								<Grid item>

									<Input
										onChange={(e) => {
											setUsername(e.target.value);
										}}
										value={username}
										type='text'
										placeholder='username'
									/>
								</Grid>

								<Grid item>
									<Input
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										value={password}
										type='password'
										placeholder='password'
									/>
								</Grid>
						
								<Grid item>
									<Button onClick={signUp}>
										{isLoading ? 'Signing Up...' : 'Sign Up'}
									</Button>
								</Grid>
								
							</Grid>
						</form>

						{/* <Link to='/login'>Already have an account?</Link> */}
						<Link to='/welcome'>Go back</Link>
				</Grid>
			</Paper>
		</section>
	);
};
export default SignUp;
					
				
					
					
