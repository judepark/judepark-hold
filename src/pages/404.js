import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { graphql } from "gatsby"
import {fadeInDown} from './../animations/m-styled-animations'

import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {Fa500px} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaVimeo} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

const iconSize = 23;

const NotFoundPage = () => (
  <ErrorPageGrid>

		<HeaderTitle>
			<strong>Jude Park</strong>
			<br/>
			User Experience Designer + Researcher
		</HeaderTitle>

		<Line>
		<hr></hr>
		</Line>

		<SiteSocial>
			<li>
				<IconMail>
				<a href="mail:jude@judepark.com" target="_blank">
					<FaEnvelope size={iconSize}/>
				</a>
				</IconMail>
			</li>
			<li>
				<IconLinkedin>
				<a href="https://www.linkedin.com/in/judepark/" target="_blank">
					<FaLinkedin size={iconSize}/>
				</a>
				</IconLinkedin>
			</li>
			<li>
				<IconDribble>
				<a href="https://dribbble.com/judepark/" target="_blank">
					<FaDribbble size={iconSize}/>
				</a>
				</IconDribble>
			</li>
			<li>
				<IconMedium>
				<a href="https://medium.com/@judepark" target="_blank">
					<FaMedium size={iconSize}/>
				</a>
				</IconMedium>
			</li>
			<li>
				<IconGithub>
				<a href="https://github.com/judepark/" target="_blank">
					<FaGithub size={iconSize}/>
				</a>
				</IconGithub>
			</li>
			<li>
				<IconTwitter>
				<a href="https://twitter.com/judepark/" target="_blank">
					<FaTwitter size={iconSize}/>
				</a>
				</IconTwitter>
			</li>
			<li>
				<IconVimeo>
				<a href="https://vimeo.com/judepark/" target="_blank">
					<FaVimeo size={iconSize}/>
				</a>
				</IconVimeo>
			</li>
		</SiteSocial>

		
		<HeaderSubtitle>
			<br/>
			Uh oh, the page was not found.
			<br/>
		</HeaderSubtitle>

	<MButton to="/">Go Back</MButton>
  </ErrorPageGrid>
)

const SiteSocial = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	margin-right: 40px;
	margin-left: -30px;
	margin-bottom: 0px;
	margin-top: -50px;
	animation: ${fadeInDown} .5s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 2px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: hsla(0, 0%, 0%, 0.3);
			transition: all 0.6s;
		}
	}
	@media(max-width: 1155px) {
		margin-right: 0;
	}
	@media(max-width: 715px) {
		margin-right: 0;
	}
`;

const IconMail = styled.ul`
a {
	&:hover {
		color: #f1d592;
		}
	}
`;

const IconLinkedin = styled.ul`
a {
	&:hover {
		color: #0077B5;
		}
	}
`;

const IconTwitter = styled.ul`
a {
	&:hover {
		color: #1da1f2;
		}
	}
`;

const IconGithub = styled.ul`
a {
	&:hover {
		color: #333;
		}
	}
`;

const IconDribble = styled.ul`
a {
	&:hover {
		color: #ea4c89;
		}
	}
`;

const IconMedium = styled.ul`
a {
	&:hover {
		color: #00ab6c;
		}
	}
`;

const IconVimeo = styled.ul`
a {
	&:hover {
		color: #1ab7ea;
		}
	}
`;

export default NotFoundPage

const ErrorPageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	p {
		color: #a8a8a8;
	}
	h1 {
		padding-top: 120px;
		font-weight: 800;
		font-size: 45px;
		margin-bottom: 24px;
	}
`

const MButton = styled(Link)`
	border: 1px solid hsla(0, 0%, 0%, 0.3);
	color: hsla(0, 0%, 0%, 0.3);
	display: flex;
	padding: 5px 20px;
	border-radius: 2px;
	width: fit-content;
	animation: ${fadeInDown} 0.5s;
	&:hover {
		background: white;
		border-color: hsla(0, 0%, 0%, 0.8);
		color: hsla(0, 0%, 0%, 0.8);
	}
`;

const HeaderTitle = styled.p`
		font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
		color: hsla(0, 0%, 0%, 0.80);
		line-height: 1.35;
		letter-spacing:0.2px;
		font-weight: normal;
		margin-bottom: 20px;
		max-width: 800px;
		margin-top: 190px;
		@media(max-width: 425px) {
			margin-top: 130px;
		}
`;

const Line = styled.p`
	animation: ${fadeInDown} 0.5s;
	marginBottom: 1em;
	width: 50%;
	@media(max-width: 1155px) {
		width: 100%;
	}
	@media(max-width: 715px) {
		width: 100%;
	}
`;

const HeaderSubtitle = styled.h3`
	margin-bottom: 40px;
	max-width: 350px;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.8);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: bold;
	max-width: 400px;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;
