import styled from 'styled-components';

export const MainSection = styled.section`
	height: 91vh;
	width: 100vw;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
`;
export const LeftPanel = styled.div`
	width: 25vw;
	height: 100%;
	-ms-flex-line-pack: center;
	align-content: center;
	position: relative;
	border: 2px solid transparent;
	border-right-color: lightgrey;
`;
export const RightPanel = styled.div`
	width: 75vw;
	height: 100%;
	position: relative;
	overflow: scroll;
`;
export const JotList = styled.div`
	height: 83%;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden;
	margin-top: 20%;
`;
export const SearchDiv = styled.div`
	padding: 20px 10px;
	width: 100%;
	background: white;
	position: absolute;
	top: 3%;
	z-index: 1;
`;

export const Card = styled.div`
	margin: 10px 5px;
	padding: 1rem;
	-webkit-transition: 0.3s;
	transition: 0.3s;
	border: 1px solid transparent;
	border-bottom-color: lightgrey;
`;

export const CardContainer = styled.div`
	padding: 2px 16px;
`;

export const Form = styled.form`
	width: ${(props) => props.width};
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
`;
export const Label = styled.label`
	display: flex;
	flex-direction: column;
	color: #777;
	font-family: 'Raleway', sans-serif;
	font-size: 1rem;
	margin: 0.5rem 0;
	position: relative;
`;

export const Input = styled.input`
	width: ${(props) => props.width};
	height: 35px;
	border: 2px solid rgba(0, 0, 0, 0.2);
	background-color: #fff;
	font-size: 100%;
	border-radius: 5px;
`;
export const TextArea = styled.textarea`
	width: 100%;
	font-size: 100%;
	overflow: scroll;
	border: 2px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;

export const Button = styled.button`
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
export const AuthDiv = styled.div`
	width: 60vw;
	height: 40vh;
`;
