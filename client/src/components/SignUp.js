import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
	Section,
	Card,
	Img,
	Form,
	Label,
	Input,
	Button
} from '../styles/AuthForm';
import Axios from 'axios';

import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

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
		<Section>
			<Card>
				<div>
					<Img src={LogoSrc} alt='Jot Logo with blue gradient feather' />
				</div>
				<h2>Sign Up</h2>
				<Form>
					<Label>
						Username:
						<Input
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							value={username}
							type='text'
							placeholder='username'
						/>
					</Label>
					<Label>
						Password:
						<Input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
							type='password'
							placeholder='password'
						/>
					</Label>
					<Button onClick={signUp}>
						{isLoading ? 'Signing Up...' : 'Sign Up'}
					</Button>
				</Form>
				<Link to='/login'>Already have an account?</Link>
				<Link to='/'>Go back</Link>
			</Card>
		</Section>
	);
};
export default SignUp;
