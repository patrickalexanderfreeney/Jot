import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Label, Input, Button } from '../styles/Containers';
import { Card } from '../styles/AuthForm';
import { useAuth } from '../context/auth';
import axios from 'axios';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

const LogIn = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const { setAuthTokens } = useAuth();

	const logIn = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const response = await axios.post(
			'http://localhost:3000/login',
			{
				username,
				password
			},
			config
		);
		// const data = await response.data;

		if (response.status === 200) {
			setAuthTokens(response.data);
			setIsLoggedIn(true);
		} else {
			setIsError(true);
		}
	};

	if (isLoggedIn) {
		return <Redirect to='/home' />;
	}

	return (
		<>
			{/* <Card> */}
			<div>
				{' '}
				<img src={LogoSrc} alt='' />{' '}
			</div>
			<Form top='33%' left='37%' width='400px'>
				<Label>Please Log In</Label>

				<label>
					Username:
					<Input
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						width='100%'
						type='text'
					/>
				</label>
				<label>
					Password:
					<Input
						type='password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						width='100%'
					/>
				</label>
				<Button onClick={logIn}>LogIn</Button>
			</Form>
			{/* <Link to='/signup'>Don't have an account?</Link> */}
			{/* </Card> */}
		</>
	);
};
export default LogIn;
