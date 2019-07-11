import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectCard = (props) => {
  return (
	<Link to={props.data.fields.slug}>
		<ProjectCardContainer>
			<Img className="project-card-image" fluid={props.data.frontmatter.image.childImageSharp.fluid} alt="Project Image"/>
			<ProjectCardContent>
				<h4>{props.data.frontmatter.title}</h4>
				<p>{props.data.frontmatter.projectShortBrief}</p>
				<br/>
				<ReadMore theme={props.data.frontmatter.accentColor}>View Project</ReadMore>
			</ProjectCardContent>
		</ProjectCardContainer>
	</Link>
  )
}

// TODO: Create a style component wrapper for the gatsby-image component

const ProjectCardContainer = styled.div`
	display: grid;
    width: 100%;
    background: #fafafa;
    border-radius: 4px;
	grid-template-columns: 40% 1fr;
	overflow: hidden;
	height: 300px;
	.recent-project-content {
		grid-column: 2;
		padding: 40px 32px;
		align-self: center;
	}
	.project-card-image {
		grid-column: 1;
		padding: 0;
		height: 100%;
		object-fit: cover;
		margin: 0;
		border-radius: 4px;
	}
	h4 {
		font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
		color: hsla(0, 0%, 0%, 0.80);
		display: inline-block;
		line-height: 1.35;
		font-weight: normal;
		margin-right: 0px;
		margin-left: 0px;
		margin-top: 5px;
		margin-bottom: 0px;
		font-weight:normal;
	}
	p {
		font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
		letter-spacing: -.02em;
		color: hsla(0, 0%, 0%, 0.35);
		display: inline-block;
		line-height: 1.35;
		margin-right: 0px;
		margin-left: 0px;
		margin-top: 3px;
		margin-bottom: 0px;
	}
	&:hover {
		opacity: 1;
	}
	/* This syntax is used to reference another styled component */
	&:hover ${ReadMore}:after, &:focus ${ReadMore}:after, &:active ${ReadMore}:after {
		right: 0;
	}
	@media(max-width: 500px) {
		grid-template-columns: 50% 1fr;
	}
`;

const ProjectCardContent = styled.div`
	grid-column: 2;
	padding: 40px 0px 40px 32px;
	align-self: center;
`;

const ReadMore = styled.span`
	margin-top: 8px;
	font-weight: 500;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	display: inline-block;
	opacity: 1;
	border-bottom: 1px solid #cecece;
	position: relative;
	transition: opacity 0.3s;
	--accent-color: ${props => props.theme};
	&:after {
		content: '';
		position: absolute;
		background: var(--accent-color);
		left: 0;
		right: 100%;
		bottom: -1px;
		height: 1px;
		transition: all 0.3s;
	}
`;

export default ProjectCard;
