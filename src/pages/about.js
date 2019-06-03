import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import FlickrPhotoGrid from '../components/FlickrPhotoGrid';
import FlipButton from '../components/FlipButton';

import { graphql } from "gatsby"

import {fadeInDown} from './../animations/m-styled-animations'

const AboutPage = ({data}) => (
  <React.Fragment>
	<Helmet title={data.site.siteMetadata.title + ' | ' + "About"}></Helmet>
	<PageGrid>
		<HeaderAction>
			<HeaderTitle>
			<br/><br/><br/><br/><br/><br/>
			ABOUT
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			Hello, I am a UX Designer and Researcher who develops technological innovations for social good. 
			<br/>
			</HeaderSubtitle>		
			<FlipButton link="mailto:jude@judepark.com" content="Hire Me" hoverContent="I'm Available"></FlipButton>
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			EXPERIENCE
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			<a href="/">FREELANCE</a> UX Consultant
			<br/>
			<a href="https://www.ventureforcanada.ca/">VFC</a> UX Fellow 
			<br/>
			<a href="https://www.rbc.com/dms/enterprise/futurelaunch/">RBC</a> UI/UX Designer 
			<br/>
			<a href="https://www.utoronto.ca/">ITS</a> Research Repositories Assistant 
			<br/>
			<a href="https://www.ontario.ca/page/about-ontario-public-service">OPS</a> Librarian Assistant
			<br/>
			<a href="https://www.torontopubliclibrary.ca/">TPL</a> Librarian Assistant
			<br/>
			<a href="http://www.vogue.co.kr/">VOUGE KOREA</a> IT Intern
			</HeaderSubtitle>		
			<HeaderSubtitle>			
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			EDUCATION
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			<a href="https://ischool.utoronto.ca/">UofT</a> Masters of Information
			<br/>
			User Experience Design / 
			<br/>
			Information Systems Design
			</HeaderSubtitle>		
			<HeaderSubtitle style={{textAlign:"left"}}>			
			<br/>
			<a href="https://www.trentu.ca/">TRENT</a> Bachelors of Arts
			<br/>
			Cultural Anthropology / Linguistics / History
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			TECH PROFICIENCIES
			</HeaderTitle>
			<HeaderTitle>
			RESEARCH METHODS⠀⠀⠀⠀⠀⠀⠀⠀
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			DESIGN <a href="/">InDesign</a> <a href="/">Photoshop</a> <a href="/">Illustrator</a> <a href="/">Adobe XD</a> <a href="/">Sketch</a> <a href="/">InVision</a> <a href="/">Axure</a> <a href="/">Principle</a>
			<br/>
			DEVELOPMENT <a href="/">React</a> <a href="/">GraphQL</a> <a href="/">Node.js</a> <a href="/">Gatsby</a>
			</HeaderSubtitle>		
			<HeaderSubtitle>			
			<br/>
			METHODS <a href="/">Ethnographic Field Studies</a> <a href="/">Clickstream Analysis</a> <a href="/">A/B Testing</a> <a href="/">Heuristics Analysis</a> <a href="/">Card Sorting</a> <a href="/">Interviews</a> <a href="/">Concept Testing</a> <a href="/">True-Intent Studies</a> <a href="/">Surveys</a>
			<br/>
			DESIGN PROCESSES <a href="/">Fair Design</a> <a href="/">Participatory Design</a> <a href="/">Inclusive Design</a> <a href="/">Accessibility Design</a> <a href="/">Design Thinking</a>
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			VOLUNTEER / PERSONAL
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			VOLUTEER <a href="https://www.pathwaystoeducation.ca/">Pathways to Education</a> <a href="https://mlh.io">Major League Hacking</a> <a href="https://ellehacks.com/">Elle Hacks</a> <a href="https://www.rbc.com/innovator/home.html">RBC The Next Great Innovator</a> <a href="https://www2.ocadu.ca/event/inclusive-design-hackathon">Inclusive Design</a> <a href="http://techportfolio.net/2016/03/canadas-big-banks-turn-to-hackers-for-innovation/">IBM Bluemix Hackathon</a> <a href="https://archive.org/">Internet Archive</a> <a href="https://inspirehacks.devpost.com/">InspireHacks</a> <a href="https://www.studentlife.utoronto.ca/bts/innovation-hub">Innovation Hub</a> <a href="https://www.miamuseum.ca/">Museum of Inuit Art</a> <a href="http://mhso.ca/wp/">Multicultural History Society of Ontario</a> <a href="https://www.torontopubliclibrary.ca/support-us/volunteering/yags/">Youth Advisory Group</a> <a href="http://www.lawyersfeedthehungry.ca/toronto.html">Laywers Feed the Hungry</a> <a href="http://www.mealsonwheels.ca/">Meals on Wheels</a>
			</HeaderSubtitle>		
			<HeaderSubtitle>			
			<br/>
			CURRENT PERSONAL PROJECTS <a href="/">Hey Jude Webcomics Series</a> <a href="/">Healthcare App</a>	<a href="/">Anti-Seizure Web Reader</a>	<a href="/">LGBTQ Web Info-Pamphlet for South Koreans</a> <a href="/">Social Networking app for Bookworms</a> <a href="/">Online Journaling File App</a>	
			</HeaderSubtitle>		
		</HeaderAction>

		




		<HeaderAction>
		<PortfolioTitle>
		<br/><br/><br/><br/>
		MORE OF MY WORKS
		</PortfolioTitle>
		</HeaderAction>
		
		<FlickrPhotoGrid></FlickrPhotoGrid>
	</PageGrid>
  </React.Fragment>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const HeaderAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0px;
	animation: ${fadeInDown} 1s;
	@media(max-width: 600px) {
		flex-direction: column;
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
	letter-spacing: 0.2px;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const HeaderSubtitle = styled.h3`
	margin-bottom: 100px;
	max-width: 350px;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.3);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: normal;
	max-width: 400px;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
	a {
		margin-bottom: 100px;
		max-width: 350px;
		font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
		color: hsla(45, 100%, 49%, 1.0);
		letter-spacing: -.02em;
		line-height: 1.35;
		font-weight: normal;
		max-width: 400px;
		animation: ${fadeInDown} 0.5s;
		@media(max-width: 425px) {
			margin-top: 130px;
		}
		&:hover {
			color: hsla(0, 0%, 0%, 0.80);
		}
	}
`;

const PortfolioTitle = styled.p`
	margin-bottom: -20px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.3);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 0.5s;
	@media(maxs-width: 425px) {
		margin-top: 130px;
	}
`;

export default AboutPage

export const query = graphql`
	query SiteTitlePhotoQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
	}
`;