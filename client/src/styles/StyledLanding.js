import Styled from 'styled-components';

const Section = Styled.section`
	height: 100vh;
	position: relative;
	
`;

const Header = Styled.div`
	position: absolute;
    top:50%;
    left:50%;
    transform:translate( -50%, -50%);

`;
const Title = Styled.h1`
	font-size:  3rem;	

`;
const Button = Styled.button`
	width: 300px;
	height: 35px;
	font-size: 100%;
	align-self: center;
	margin-top: 0.5rem;
	background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
	color: #fff;
	border-radius: 5px;
	&:hover {
		-webkit-transform: scale(1.02);
		transform: scale(1.02);
	}
`;

export { Section, Header, Title, Button };
