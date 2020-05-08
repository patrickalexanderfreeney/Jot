import React, { useState, useContext } from 'react';
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
import { StoreContext } from './store';
import axios from 'axios';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

const LogIn = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [state, dispatch] = useContext(StoreContext);

	if (state.user) {
		return <Redirect to='/home' />;
	}

	const logIn = async (e) => {
		e.preventDefault();

		dispatch({ type: 'LOGGINGIN' });

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const response = await axios.post(
				'http://localhost:3000/login',
				{
					username,
					password
				},
				config
			);
			console.log(response);

			dispatch({ type: 'SUCCESS', payload: response.data });
		} catch (error) {
			dispatch({ type: 'ERROR' });
		}
	};

	if (state.isLoggedIn) {
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
					<Button disabled={state.isLoading} onClick={logIn}>
						{state.isLoading ? 'Logging in...' : 'Log In'}
					</Button>
				</Form>
				<Link to='/signup'>Don't have an account?</Link>
			</Card>
		</Section>
	);
};
export default LogIn;
