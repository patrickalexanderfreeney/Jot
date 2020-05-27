import styled from 'styled-components';

const CardContainer = styled.div`
	padding: 2px 16px;

	div {
		display: flex;
	}
`;
const Card = styled.div`
	margin: 10px 5px;
	padding: 1rem;
	-webkit-transition: 0.3s;
	transition: 0.3s;
	border: 1px solid transparent;
	border-bottom-color: lightgrey;
`;
const Button = styled.button`
	width: 300px;
	height: 35px;
	font-size: 100%;
	align-self: center;
	margin-top: 0.5rem;
	background-color: #009bea;
	color: #fff;
	border-radius: 5px;
	&:hover {
		-webkit-transform: scale(1.02);
		transform: scale(1.02);
	}
`;

export { Button, Card, CardContainer };
