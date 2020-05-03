import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
	Section,
	Card,
	Form,
	Img,
	Label,
	Input,
	Button
} from '../styles/AuthForm';
import { useAuthDataContext } from '../context/auth';
import axios from 'axios';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

const LogIn = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const { user, onLogIn } = useAuthDataContext();

	if (user) {
		return <Redirect to='/home' />;
	}

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
		console.log(response);

		if (response.status === 200) {
			localStorage.username = response.data.user.username;
			localStorage.password = response.data.user.password_digest;
			localStorage.tokens = response.data.user.token;
			localStorage.id = response.data.user.id;
			onLogIn(response.data);
			setIsLoggedIn(true);
		} else {
			setIsError(true);
		}
	};

	if (isLoggedIn) {
		return <Redirect to='/home' />;
	}

	return (
		<Section>
			<Card>
				<div>
					<Img src={LogoSrc} alt='Jot Logo with blue gradient feather' />
				</div>
				<h2>Log In</h2>
				<Form>
					<Label>
						Username:
						<Input
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							width='100%'
							type='text'
							placeholder='username'
						/>
					</Label>
					<Label>
						Password:
						<Input
							type='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder='password'
						/>
					</Label>
					<Button onClick={logIn}>Submit</Button>
				</Form>
				<Link to='/signup'>Don't have an account?</Link>
			</Card>
		</Section>
	);
};
export default LogIn;
