import React from 'react';
import styled from 'styled-components'

import { Slide } from 'presa';
import { Title } from 'presa/blocks'
import backgroundGif from "./rabbit-run.gif";

const DeckTitle = styled(Title)`
  line-height: 0.95;
  margin-top: 90px;
`

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 180px;
  font-weight: bold;
  font-size: 24px;
  align-items: flex-end;
  color: black;
`

const Author = styled.div`
  border-bottom: 2px solid black;
  padding-top: 10px;
`

const TwitterHandle = styled.div`
  font-size: 20px;
`

const Intro = (props) => {
	console.log(props)
	return (
		<Slide {...props} background={backgroundGif}>
			<DeckTitle color="black">
				Про геометрию↝<br />и математику
			</DeckTitle>

			<Contacts>
				<Author>
					Вова Куликов<br />404 Fest Самара
				</Author>

				<TwitterHandle>@_vovakulikov · wrike.com</TwitterHandle>
			</Contacts>
		</Slide>
	)
};


export default Intro;
