import React from 'react'
import styled from 'styled-components'
import {fadeInUp} from '../animations/m-styled-animations'

const Footer = () => {
  return (
	<PageFooter>
		<div>
      <br />
      <footer>
				Made with 💛 in Toronto
       <br />
			 © {new Date().getFullYear()} JUDE PARK
			 <br />
				{` `}
        </footer>
        </div>

	</PageFooter>
  )
}


const PageFooter = styled.div`
	display: flex;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
  padding: 0px 20px;
  margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 0px;
  flex-direction: row;
  align-items: flex-end;
	justify-content: flex-end;
	animation: ${fadeInUp} 1s;

	@media(max-width: 1155px) {
		padding: 0 24px;
	}
	
	@media(max-width: 715px) {
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		margin-top: 110px;
		margin-bottom: 30px;
		padding: 0 24px;
	}

`;

export default Footer;