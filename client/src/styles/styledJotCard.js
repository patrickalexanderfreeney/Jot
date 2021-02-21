import styled from 'styled-components';


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
