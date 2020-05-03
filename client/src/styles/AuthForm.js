import styled from 'styled-components';

const Section = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: row;
`;
const Card = styled.div`
	box-sizing: border-box;
	max-width: 410px;
	margin: 0 auto;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 15%;
`;

const Img = styled.img`
	width: 100%;
	margin-bottom: 1rem;
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Label = styled.label`
	display: flex;
	flex-direction: column;
	color: #777;
	font-family: 'Raleway', sans-serif;
	font-size: 1rem;
	margin: 0.5rem 0;
	position: relative;
`;

const Input = styled.input`
	padding: 1rem;
	border: 2px solid rgba(0, 0, 0, 0.2);
	font-size: 0.8rem;
	border-radius: 5px;
`;

// const Button = styled.button`
// 	background: linear-gradient(to bottom, #6371c7, #5563c1);
// 	border-color: #3f4eae;
// 	border-radius: 3px;
// 	padding: 1rem;
// 	color: white;
// 	font-weight: 700;
// 	width: 100%;
// 	margin-bottom: 1rem;
// 	font-size: 0.8rem;
// `;

const Button = styled.button`
	width: 100%;
	font-size: 1rem;
	align-self: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	padding: 0.9rem;
	background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
	color: #fff;
	border-radius: 5px;
	&:hover {
		-webkit-transform: scale(1.02);
		transform: scale(1.02);
	}
`;

const Logo = styled.img`
	width: 50%;
	margin-bottom: 1rem;
`;

const Error = styled.div`
	background-color: red;
`;

export { Section, Form, Img, Input, Button, Logo, Card, Error, Label };
