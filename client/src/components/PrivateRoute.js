import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { useAuthDataContext } from '../contexts/auth';

export default function PrivateRoute({ component: Component, ...rest }) {
	const { user } = useAuthDataContext();
	// const finalComponent = user ? component : SignInPage;
	return (
		<Route
			{...rest}
			render={(props) =>
				user ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { referer: props.location } }}
					/>
				)
			}
		/>
	);
}
