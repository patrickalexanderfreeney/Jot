import styled, { css } from 'styled-components';

export const Button = styled.button`
/* width originally set to 6rem - changed for testing */
	width:20%;
	height: 2.5rem;
	font-size: 100%;
	align-self: center;
	margin: 1rem;
	background-color: #005bea;
	color: #fff;
	border-radius: 5px;
	border:none;
	&:hover {
		-webkit-transform: scale(1.02);
		transform: scale(1.02);
	}`
