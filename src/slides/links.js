import React from 'react'
import styled from 'styled-components'
import { Slide, BuiltWithPresa } from 'presa'

const LinksSlide = () => (
	<Slide name="Ссылка на презентацию">
		my twitter
		<LinkWrap>
			<LinkIcon>👉 </LinkIcon>
			<TweeterLink
				target="_blank"
				href="https://twitter.com/_vovakulikov"
			>
				twitter.com/_vovakulikov
			</TweeterLink>
		</LinkWrap>
		link to the slides
		<LinkWrap>
			<LinkIcon>👉 </LinkIcon>
			<FinalLink
				target="_blank"
				href="http://bit.do/e8AFJ"
			>
				bit.do/e8AFJ
			</FinalLink>
		</LinkWrap>
		source code
		<LinkWrap>
			<LinkIcon>⭐️ </LinkIcon>
			<FinalLink
				target="_blank"
				href="https://github.com/vovakulikov/math-presa.git"
			>
				github.com/vovakulikov/math-preza
			</FinalLink>
		</LinkWrap>
		<Footer>
			<BuiltWithPresa size={18} />
		</Footer>
	</Slide>
);

export default LinksSlide

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 10px;
`

const OwnContacts = styled.div`
  font-size: 22px;
  font-weight: 500;
  &,
  a {
    color: #3f5ffb;
  }
`

const LinkWrap = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 32px;
`

const LinkIcon = styled.div`
  font-size: 36px;
  margin-right: 10px;
`

const FinalLink = styled.a`
  font-size: 32px;
  font-weight: 500;
  text-decoration: underline;
  color: #333;
  padding: 0 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    color: white;
  }
`

const TweeterLink = styled.a`
  font-size: 32px;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  padding: 0 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    color: white;
  }
`
