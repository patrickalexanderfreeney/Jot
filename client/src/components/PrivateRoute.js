import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { StoreContext } from './store';
import LogIn from './LogIn';

export default function PrivateRoute({ component: Component, ...rest }) {
	const { user } = localStorage.data || StoreContext();

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
