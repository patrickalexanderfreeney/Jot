import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { StoreContext } from './store';

export default function PrivateRoute({ component: Component, ...rest }) {
	const user = localStorage.user;

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
