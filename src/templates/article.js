import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {fadeInDown, fadeInUp, fadeInScaleDown} from './../animations/m-styled-animations'
import {LoadScreen} from './../animations/m-styled-animations'

import LiveContentCard from '../components/LiveContentCard'


import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaVimeo} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

import {FaRegImage} from 'react-icons/fa'
import {FaCreativeCommons} from 'react-icons/fa'



const iconSize = 20;
const iconSize2 = 15;

export default function Template({ data }) {

	

	return (
		<React.Fragment>

		<LoadingScreen accentColor={data.markdownRemark.frontmatter.accentColor}>
	  ⠀
	  </LoadingScreen>

		<Helmet title={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}>
            <meta name="theme-color" content={data.markdownRemark.frontmatter.themeColor}/>
		</Helmet>
		
		<ArticleContentGrid>
			<ArticleHeadingBanner themeColor={data.markdownRemark.frontmatter.themeColor}>
			</ArticleHeadingBanner>

			<ArticleHeader themeColor={data.markdownRemark.frontmatter.themeColor}>
				<ArticlePostTitle>{data.markdownRemark.frontmatter.title}</ArticlePostTitle>
				<ImageLayout>
				<Img style={{position: 'static', top: 0, left: 0, width: '100%', height: `100%`}} fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
				</ImageLayout>
			</ArticleHeader>

			<MetaHeader accentColor={data.markdownRemark.frontmatter.accentColor}>
			<Reading>{data.markdownRemark.fields.readingTime.text}</Reading>
			<Date>{data.markdownRemark.frontmatter.date}</Date>
			</MetaHeader>

		</ArticleContentGrid>

		<br/>
		<br/>
		<br/>


		<ArticleContentGrid>
			<ArticleDetails>
				<div>
				<ImageAuthor>
					<li><Icon><FaRegImage size={iconSize2}/></Icon> {data.markdownRemark.frontmatter.imageauthor} <Icon><FaCreativeCommons size={iconSize2}/></Icon></li>					
				</ImageAuthor>
				</div>
			</ArticleDetails>
		</ArticleContentGrid>



		<br/>

		<ArticleContentGrid2 accentColor={data.markdownRemark.frontmatter.accentColor} themeColor={data.markdownRemark.frontmatter.themeColor}>


			<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

			{data.markdownRemark.frontmatter.showLiveContent && 
				<LiveContentCard thumbnail={data.markdownRemark.frontmatter.image.childImageSharp.fluid.src} title={data.markdownRemark.frontmatter.title} url={data.markdownRemark.frontmatter.url} accentColor={data.markdownRemark.frontmatter.accentColor}/>
			}
			

		</ArticleContentGrid2>

		<BackgroundColor themeColor={data.markdownRemark.frontmatter.themeColor}/>

		
		<Footer themeColor={data.markdownRemark.frontmatter.themeColor}>

		<Line>
		<hr></hr>
		</Line>

		<HeaderTitle accentColor={data.markdownRemark.frontmatter.accentColor}>
			<strong>Jude Park</strong> is a User Experience Designer + Researcher who develops technological innovations for social change.
		</HeaderTitle>
		
		<SiteSocial accentColor={data.markdownRemark.frontmatter.accentColor}>
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
				<IconTwitter>
				<a href="https://twitter.com/judepark/" target="_blank">
					<FaTwitter size={iconSize}/>
				</a>
				</IconTwitter>
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
				<IconVimeo>
				<a href="https://vimeo.com/judepark/" target="_blank">
					<FaVimeo size={iconSize}/>
				</a>
				</IconVimeo>
			</li>
		</SiteSocial>

		<Line>
		<hr></hr>
		</Line>
		

		</Footer>

		</React.Fragment>
	)
}

/*

			<li>
				<IconYoutube>
				<a href="https://medium.com/@judepark" target="_blank">
					<FaYoutube size={iconSize}/>
				</a>
				</IconYoutube>
			</li>


					<ArticleContentGrid>
		<ArticleDetails>
				<div>
					<ArticleDetailsTitle>
					Tagged
					</ArticleDetailsTitle>
					<ArticleDetailsContent>
					{data.markdownRemark.frontmatter.tags}
					</ArticleDetailsContent>
				</div>
				<div>
					<ArticleDetailsTitle>
					<br/>
					NEXT
					</ArticleDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.articleWHATITSBESTFOR}</h5>
				</div>
				<div>
					<ArticleDetailsTitle>
					<br/>
					PREVIOUS
					</ArticleDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.articleCLIENT}</h5>
				</div>
			</ArticleDetails>
			</ArticleContentGrid>

*/

const MetaHeader = styled.div`
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: 0.8rem;
	color: ${props => props.accentColor};
	filter: opacity(100%);
	letter-spacing: 1px;
	line-height: 1.35;
	font-weight: 500;
	text-align: left;
	display:inline-block;
	margin-top:-18rem;
	z-index: 5;
	animation: ${fadeInDown} 1s;
`;

const Reading = styled.div`
margin-bottom: 5px;
@media(max-width: 720px) {
	margin-top:15rem;
	margin-bottom: 0px;
	display:inline-block;
	::after {
		content: "⠀ · ⠀"; 
		color: ${props => props.accentColor};
	  }
}
`;

const Date = styled.div`
@media(max-width: 720px) {
	margin-top:15rem;
	display:inline-block;
}
`;

const ArticleHeadingBanner = styled.div`
    width: 100vw;
    content: "";
    left: -10vw;
    height: 100vh;
    top: -70vh;
    right: -30vw;
    position: absolute;
		transform: rotate(25deg);
		--accent-color: ${props => props.themeColor};
		background: var(--accent-color, black);
		z-index: -2;
`;




const ArticleHeader = styled.div`
	height: 500px;
	display: flex;
	justify-content: left;
	align-items: center;
	position: relative;
	padding: 0px 0px;


	& img {
		animation: ${fadeInDown} 1s;
		text-align: right;
		max-width:100%;
		position:absolute;
		padding: 0px 0px 0px 400px;

		@media (max-width: 720px) {
			padding: 0px 0px 0px 0px;
			margin-top:3rem;
			max-height: 250px;
		}
	}

	&:after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${props => props.accentColor} 100%);
	}

	@media (max-width: 720px) {
		height: 500px;
	}
`;


const ImageLayout = styled.div`

`;



const ArticlePostTitle = styled.h1`
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 45px + (50 - 45) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	padding: 10px 15px 10px 15px;
	margin-top: 250px;
	margin-top: 250px;
	font-weight: normal;
	text-align: left;
	max-width: 720px;
	background-color: white;
	display:block;
	z-index: 5;
	animation: ${fadeInScaleDown} 1.5s ease-out;
	@media(max-width: 720px) {
		margin-top: 250px;
	}
`;

const ArticleContentGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	p {
		opacity: 0.85;
	}
`;

const ArticleContentGrid2 = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 720px) [end] minmax(24px, 12fr);
	animation: ${fadeInUp} 1.8s;

	& > * {
		grid-column: center;
	}
	p {
		opacity: 0.85;
		a {
			background-color: transparent;
			color: ${props => props.accentColor};
		}
	}
`;

const ArticleDetails = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: -20px;
	margin-top: 0px;
	z-index: 1;
	background: transparent;

	div {
		padding-right: 0px;
		padding-bottom: 0px;
		width: 100%;
	}

	/* *this is not being used, excluded:
	@media(max-width: 1155px) {
		padding: 0px;
    	margin-bottom: -20px;

		div {
			padding-right: 0px;
			padding-bottom: 0px;
			width: 50%;
		}
		div:last-child {
			width: 50%;
		}
	}
	*/
`;

const ArticleDetailsTitle = styled.div`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	margin-bottom: 0px;
	z-index:2;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const ArticleDetailsContent = styled.div`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	line-height: 1.35;
	word-spacing: 30px;
	letter-spacing: 0.5px;
	font-weight: normal;
	margin-bottom: 0px;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const ImageAuthor = styled.div`
	display: inline-block;
	flex-direction: column;
	justify-content: flex-start;
	writing-mode: vertical-rl;
	align-items: none;
	list-style: none;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	margin-right: 40px;
	margin-left: 0px;
	margin-bottom: 100px;
	margin-top: -500px;
	z-index:3;
	color: hsla(0, 0%, 0%, 0.35);
	animation: ${fadeInDown} .5s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 1px;
	}
	@media(max-width: 920px) {
		display: none;
	}
`;

const Icon = styled.div`
	transform: rotate(90deg);
	display: inline-block;
`;




const BackgroundColor = styled.div`
	position: fixed;
	z-index: -10;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.accentColor};
`;

const Footer = styled.div`
	background-color: ${props => props.themeColor};
	margin-bottom: -170px;
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`;

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
	margin-bottom: -30px;
	margin-top: -20px;
	animation: ${fadeInDown} .5s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 1px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: hsla(0, 0%, 0%, 0.35);
			transition: all 0.3s;
			color: ${props => props.accentColor};
		}
	}
	@media(max-width: 1155px) {
		margin-right: 0;
	}
	@media(max-width: 720px) {
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

const IconYoutube = styled.ul`
a {
	&:hover {
		color: #ff0000;
		}
	}
`;

const HeaderTitle = styled.h1`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: ${props => props.accentColor};
	filter: opacity(100%);
	line-height: 1.35;
	font-weight: normal;
	margin-bottom: 20px;
	max-width: 420px;
	margin-top: 0px;
	letter-spacing:0.2px;
	@media(max-width: 720px) {
		width: 80%;
	}
`;

const Line = styled.p`
	opacity: 0; 
	marginBottom: 1em;
	width: 100%;
	@media(max-width: 1155px) {
		width: 100%;
	}
	@media(max-width: 720px) {
		width: 100%;
	}
`;

const LoadingScreen = styled.div`
background-color: ${props => props.accentColor};
animation: ${LoadScreen} 1s;
animation-fill-mode: forwards;  
margin-bottom:-30px
`;


export const query = graphql`
	query ArticleBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				url
				date(formatString: "MMMM D, YYYY")
				tags
				themeColor
				accentColor
				imageauthor
				showLiveContent
				image {
					childImageSharp {
					  fluid(maxWidth: 1600) {
						...GatsbyImageSharpFluid
					  }
					}
				  }
			}
			html
			fields {
				slug
				readingTime {
					text
				  }
			}
		}
	}
`
