import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard';

import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'
import {LoadScreen} from './../animations/m-styled-animations'


import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaVimeo} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

import {Link} from 'gatsby'

import FlipButton from '../components/FlipButton';


const iconSize = 23;

const IndexPage = ({data}) => (
  <React.Fragment>
	  <LoadingScreen>
	  ⠀
	  </LoadingScreen>
	  
	  <PageGrid>
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
		

		<HeaderSubtitle>
			<br/>
			Welcome to my site!
			<br/>
			These are my projects from over the years.
			<br/>
			Feel free to explore the collection.
			<br/>
		</HeaderSubtitle>
	</PageGrid>

	<PageGrid2>

	<PortfolioTitle>
	RESEARCH
	</PortfolioTitle>

		<ArticleCardGrid>

			{data.allMarkdownRemark.edges.map(({node}) => (
				<ArticleCard data={node} key={node.key}></ArticleCard>
			))}

		</ArticleCardGrid>
	</PageGrid2>

	
	<PageGrid2>

	<PortfolioTitle>
	PORTFOLIO
	</PortfolioTitle>

<Gallery>

<a class="grid-img" href="https://dribbble.com/shots/6729418-Book-of-Revelations"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6729418/book_of_revelations_dribble_reduced_4x.png" alt="" width="210" height="155"></img><GalleryItem><p>Book of Revelations</p></GalleryItem></a>

<a class="grid-img" href="https://dribbble.com/shots/6729227-JUDE-Journal-Vol-1"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6729227/jude_journal_dribble_page_reduced_4x.png" alt="" width="210" height="155"></img><GalleryItem><p>JUDE Journal</p></GalleryItem></a>

</Gallery>

	</PageGrid2>



	<PageGrid3>

	<PortfolioTitle>
	DESIGN REEL
	</PortfolioTitle>

	<p>B</p>

	</PageGrid3>

	<br/><br/><br/><br/><br/>

	<PageGrid3>

	<PortfolioTitle>
	ABOUT
	</PortfolioTitle>
	
	<HeaderSubtitle>			
			<br/>
			<strong>Jude Park</strong> is a User Experience Designer + Researcher 
			who develops technologies for social good. 
			Always asking what is fair in design, 
			Jude is inventing a new approach 
			to designing user experience. <FlipButton link="/fairdesignmovement" content="More ⯈" hoverContent="More ⯈"></FlipButton>
			<br/>
	</HeaderSubtitle>	

	</PageGrid3>

	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>

  </React.Fragment>
)


/* 

To add later when I finish them:

			<li>
				<IconYoutube>
				<a href="https://medium.com/@judepark" target="_blank">
					<FaYoutube size={iconSize}/>
				</a>
				</IconYoutube>
			</li>


	<PortfolioTitle>
	DESIGN REEL
	</PortfolioTitle>

	<PortfolioTitle>
	ARTICLES
	</PortfolioTitle>

			Industry Curriculum Vitae  ⭳

			<br/>
			Academic Curriculum Vitae ⭳

			<br/>
			<br/>
			<FlipButton link="mailto:jude@judepark.com" content="Hire Me" hoverContent="I'm Available"></FlipButton>
		</HeaderSubtitle>

*/



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
	animation: ${fadeInDown} 1s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 2px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: hsla(0, 0%, 0%, 0.35);
			transition: all 0.3s;
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




const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`;

const PageGrid2 = styled.div`
	display: inline-grid;
	max-width: 50%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1000px) {
		display: grid;
		max-width: 100%;
	}
`;

const PageGrid3 = styled.div`
	display: grid;
	margin-bottom:-180px;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`;

const HeaderTitle = styled.h1`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	font-weight: normal;
	margin-bottom: 20px;
	max-width: 800px;
	margin-top: 190px;
	letter-spacing:0.2px;
	@media(max-width: 720px) {
		margin-top: 130px;
	}
`;

const Line = styled.p`
	animation: ${fadeInDown} 1s;
	marginBottom: 1em;
	width: 50%;
	@media(max-width: 720px) {
		width: 100%;
	}
`;

const HeaderSubtitle = styled.h3`
	margin-bottom: 0px;
	max-width: 600px;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: normal;
	animation: ${fadeInDown} 1s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const PortfolioTitle = styled.p`
	margin-bottom: 30px;
	margin-top: 170px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 0.5s;
	@media(maxs-width: 425px) {
		margin-top: 130px;
	}
`;

const ArticleCardGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
	grid-gap: 40px;
	animation: ${fadeInDown} 1s;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

const Gallery = styled.div`
display: grid;
grid-template-columns: repeat(2, 0fr);
grid-template-rows: repeat(2, 0fr);
margin-bottom: 20px;
grid-gap: 20px;
animation: ${fadeInDown} 1s;
a {
	&:hover {
		animation: ${MoveUp} 0.3s;
		animation-fill-mode: forwards;  
		}
	}

`;

const GalleryItem = styled.div`
margin-bottom: -40px;
margin-top: -30px;
`;

const LoadingScreen = styled.div`
background-color: hsla(0, 0%, 0%, 0.80);
animation: ${LoadScreen} 1s;
animation-fill-mode: forwards;  
margin-bottom:-30px
`;

export default IndexPage

export const query = graphql`
query ArticleQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___sortDate], order: DESC}) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  articleShortBrief
			  themeColor
			  accentColor
			  image {
				childImageSharp{
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
			  }
			}
		  }
		}
	  }
  }
`