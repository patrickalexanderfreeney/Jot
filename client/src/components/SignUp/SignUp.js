import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Button, Input, makeStyles, Paper } from '@material-ui/core'


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

		<section>
			<Card style={{maxWidth:'300px'}}>
				<h2>Sign Up</h2>
				<form>
					<Input
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						value={username}
						type='text'
						placeholder='username'
					/>
				
					<Input
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
						type='password'
						placeholder='password'
					/>
			
					<Button onClick={signUp}>
						{isLoading ? 'Signing Up...' : 'Sign Up'}
					</Button>
				</form>
				{/* <Link to='/login'>Already have an account?</Link> */}
				<Link to='/welcome'>Go back</Link>
			</Card>
		</section>
	);
};
export default SignUp;
					
				
					
					
