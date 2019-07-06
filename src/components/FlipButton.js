import React, { Component } from 'react'
import styled from 'styled-components'

export default class flipButton extends Component {
	
	state = {
		isHovering: false
	}

	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter = () => {
		this.setState({
			isHovering: true
		});
	}

	handleMouseLeave = () => {
		this.setState({
			isHovering: false
		});
	}

	render() {
		return (
		<FlipButton href={this.props.link} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
			{!this.state.isHovering && this.props.content}
			{this.state.isHovering && this.props.hoverContent}
		</FlipButton>
		)
	}
}

const FlipButton = styled.a`
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	line-height: 1.35;
	color: hsla(0, 0%, 0%, 0.8);
	transition: all 0.3s;
	font-weight: normal;
	&:hover {
		color: hsla(0, 0%, 0%, 0.8);
	}
`;

