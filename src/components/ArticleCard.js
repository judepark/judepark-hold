import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {MoveUp} from './../animations/m-styled-animations'


const ArticleCard = (props) => {
  return (
	

	<Link to={props.data.fields.slug}>
<List accent={props.data.frontmatter.accentColor} theme={props.data.frontmatter.themeColor}>
<li>
		<ArticleCardContainer>
		<Title accent={props.data.frontmatter.accentColor} theme={props.data.frontmatter.themeColor}>{props.data.frontmatter.title}</Title>
		<Date>{props.data.frontmatter.date}</Date>
		</ArticleCardContainer>
</li>
</List>
	</Link>


  )
}

// TODO: Create a style component wrapper for the gatsby-image component


const List = styled.ul`
list-style-type: circle;
color: ${props => props.accent};
	&:hover {
		list-style-type:disc;
		color: ${props => props.accent};
	}
	@media(max-width: 700px) {
	}
`;

const ArticleCardContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 80% 1fr;
	overflow: hidden;
	margin-bottom: 0px;
	&:hover {
		opacity: 1;
	}
	@media(max-width: 700px) {
	}
`;

const Title = styled.div`
	margin-top: 0px;
	margin-right: 20px;
	font-weight: normal;
	letter-spacing: -.02em;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.8);
	display: inline-block;
	line-height: 1.35;
	opacity: 1;
	border-bottom: 0px;
	position: relative;
	transition: opacity 0.3s;
	:hover {
		color: ${props => props.accent};
	}
`;

const Date = styled.div`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	margin-top: 4px;
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	@media(max-width: 700px) {
		
	}
`;

export default ArticleCard;
