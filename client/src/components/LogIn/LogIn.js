import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Section,
	Card,
	Form,
	Img,
	Label,
	Input,
	Button
} from '../../styles/AuthForm';
import Axios from 'axios';
import LogoSrc from '../../styles/mediaAssets/jot-logo.ico';


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
					<Button disabled={isLoading} onClick={logIn}>
						{isLoading ? 'Logging in...' : 'Log In'}
					</Button>
				</Form>
				<Link to='/signup'>Don't have an account?</Link>
				<Link to='/'>Go back</Link>
			</Card>
		</Section>
	);
};
