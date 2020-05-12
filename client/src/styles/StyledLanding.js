import Styled from 'styled-components';

const Section = Styled.section`
	height: 100vh;
	position: relative;
`;
const Header = Styled.h1`
	position: absolute;
    top:50%;
    left:50%;
    transform:translate( -50%)
`;
const Video = Styled.video`
	width: 100%;
	height: 100%;
	/* autoPlay;
muted; 
loop; */
`;

export { Section, Header, Video };
